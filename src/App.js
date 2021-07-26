import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { lazy, Suspense } from 'react';
// import Polygone_Raw from './assets/polygonezone-text-casablanca.json'
// import MeanQuartier from './assets/meanCartier-casablanca.json'
//cookies
import CookieConsent from "react-cookie-consent";
import ReactGA from "react-ga";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.scss';
import firebase from './Config/FirebaseConfig';
import Loading from './Loading';




function retry(fn, retriesLeft = 10, interval = 1000) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
}

const Navbar =lazy(() => retry(()=> import ('./Components/Navbar/Navbar')));
const AuthRoute =lazy(() => retry(()=> import ('./AuthRoute')));
const AuthRoutePro =lazy(() => retry(()=> import ('./AuthRoutePro')));
const Home =lazy(() => retry(()=> import ('./Pages/Home/Home')));
const NotFound =lazy(() => retry(()=> import ('./Pages/NotFound/NotFound')));
const AgenceImmobiliere =lazy(() => retry(()=> import ('./Pages/AgenceImmobiliere/AgenceImmobiliere')));
const AnnuaireDesAgences  =lazy(() => retry(()=> import ('./Pages/AnnuaireDesAgences/AnnuaireDesAgences')));
const Publier =lazy(() => retry(()=> import ('./Pages/Publier/Publier')));



class App extends React.Component {
  
addHours = (h) => {
  return Date.now()+h*60*60*1000
}
is_authenticated = () => {
let authenticated = false;
const token = localStorage.FBIdToken;

// const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjNkOWNmYWE4OGVmMDViNDI0YmU2MjA1ZjQ2YjE4OGQ3MzI1N2JjNDIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYWdlbnotd2Vic2l0ZS1wcm9kIiwiYXVkIjoiYWdlbnotd2Vic2l0ZS1wcm9kIiwiYXV0aF90aW1lIjoxNjIyMTEyNDAyLCJ1c2VyX2lkIjoiNzE0RVV4TU55bGVRY0RRbXQ5T09GYUlsZDNvMSIsInN1YiI6IjcxNEVVeE1OeWxlUWNEUW10OU9PRmFJbGQzbzEiLCJpYXQiOjE2MjIxMTI0MDIsImV4cCI6MTYyMjExNjAwMiwiZW1haWwiOiJhYmVsLnNvdWxheW1hbmlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFiZWwuc291bGF5bWFuaUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.GbCiDRPh5CIJqpteQUOdMZvLP3QuM7lITh82AnahBbvIU6_s2gEi-SHRPQRQvWNOCtYG2jgbfWE7zOrD2uL9r1-R8SA0R_3TDHzkmTYj-Y9_RrLsntTlxuwHb3o55TLqscrZpYmkwY-8Y5zWdNZ6I7qh7FI84XgyUPmPr-p4lXsuWL5m1IE5zVl3ZmKfc6AIlyOOBCYUzMMNNGT8oR8u-XmZE8DgKAk_euy_MrK5IuCYeM8x-9vOPLoR_pqoxzpF1aL7sOzR4csdCuudfVSYC6graniLUw03A2PbNP6ZcQGQPvkD-9ofROg3esdiJ5O7WAWrL7mTMrc8dc_JZzF7pA"
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp*1000 < this.addHours(-1)){
    this.props.dispatch({type : "SIGN_OUT"})
    toast.error("Votre session a expiré. Veuillez vous reconnecter");

    return(authenticated)
  }

  else {
    axios.defaults.headers.common['Authorization'] = token
    this.props.dispatch({ type: 'SET_UID', data : decodedToken.user_id});
    this.props.dispatch({ type: 'SET_EMAIL', data : decodedToken.email});
    this.props.dispatch({ type: 'SET_AUTHENTICATED'});
    if(!this.props.user){
      this.getUser(decodedToken.user_id).then((result)=>{
        this.props.dispatch({ type: 'UPDATE_USER', data: result });
        return(true)
      })
    }
    else if(!this.props.user.email){
      this.getUser(decodedToken.user_id).then((result)=>{
        // console.log(result)
        this.props.dispatch({ type: 'UPDATE_USER', data: result });
        return(true)

      })
    }
    else{
      return (true)
    }

}
}
// else {console.log("no token")}

}

is_authenticated_Pro = () => {
  let authenticated = false;
  const token = localStorage.FBIdToken;
  if(token){
  axios.post('https://us-central1-agenz-website-prod.cloudfunctions.net/api/isPro', {token : token}).then(result => {
    // console.log(result)
    if(result.data.succes){
    this.props.dispatch({ type: 'SET_AUTHENTICATED_PRO'});
    }
  })
  }
}

  authSubscription(auth, db) {
    auth.onAuthStateChanged( async user => {
      if (user) {
        // get the user information
        const user = await db.collection('users').doc(this.props.uid).get();
        this.props.dispatch({ type: 'UPDATE_USER', data: user.data() });
      } else {
        this.props.dispatch({ type: 'UPDATE_USER', data: null });
      }
    });
  }
  async getUser (id){
    return new Promise((resolve,reject)=> {
    const dbStore = firebase.firestore();
    var userRef = dbStore.collection("users")
    var query = userRef.doc(id);
    query.get().then((querySnapshot)=>{
    resolve(querySnapshot.data())
})
.catch(err=>{
    reject(err)
})
})
}

 
  agencesSubscription(db) {
    db.collection('agences').onSnapshot(snapshot => {
      const agences = [];
      snapshot.docs.forEach(doc => {
        agences.push(doc.data());
      });
      this.props.dispatch({ type: 'SET_AGENCES', data: agences });
    });
  }

  async getArticles(db) {
    const articlesSnapshot = await db.collection('articles').get();
    const articles = [];
    articlesSnapshot.docs.forEach(doc => articles.push(doc.data()));
    this.props.dispatch({ type: 'SET_PUBLICATIONS', data: articles });
  }

  async componentDidMount() {  

    // Create `axios` instance with pre-configured `axios-cache-adapter` attached to it

    
    await this.is_authenticated() 
    await this.is_authenticated_Pro()


    const db = firebase.firestore();
    const auth = firebase.auth();
    this.agencesSubscription(db);
    this.getArticles(db);
    this.props.dispatch({ type: 'LOADER_FALSE' });
  }

  componentDidUpdate(prevProps){
    if(prevProps.history != this.props.history){
              ReactGA.pageview(this.props.location.pathname+ this.props.location.search);
        console.log('page=>',window.location.pathname);
    }
  }

  render (){
    
    return (  
      <>

          <Router>
            <ToastContainer />
            
            <Suspense fallback={<Loading />}>
            <Navbar />
            <Switch>
              <Route  exact path='/' component={Home} />
              <Route  path='/agence-immobiliere'  component={AgenceImmobiliere} />
              <Route  path='/Annuaire-des-agences' component={AnnuaireDesAgences } />
              <Route  path='/Publier' component={Publier} />
              <Route component={NotFound} />
              </Switch>
            </Suspense>
          </Router>
          <CookieConsent debug={true}>This site uses cookies.</CookieConsent>
        {/* )} */}
      
      </>
    )
  }
  
} 

const mapStateToProps = (state) => {
  const uid = state.auth.uid;
  const email = state.auth.email;
  const estimation = state.estimationState;
  const authenticatedPro = state.auth.authenticatedPro

  return {
    uid: uid,
    email: email,
    estimationState: estimation,
    user: state.auth.user,
    loadState: state.loading,
    authenticatedPro : authenticatedPro
  };
};

export default connect(mapStateToProps)(App);
