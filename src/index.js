import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { applyMiddleware, createStore } from 'redux';
import { createFirestoreInstance } from 'redux-firestore';
import thunk from 'redux-thunk';
import App from './App';
import firebase from './Config/FirebaseConfig';
import rootReducer from './Reducers/rootReducer';







let initialState;


const store = createStore(
  rootReducer, initialState,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}
const rootElement = document.getElementById('root');

  ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </React.StrictMode>
  </Provider>,
  rootElement
);




