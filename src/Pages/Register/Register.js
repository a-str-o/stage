import React, { Component } from 'react';
import RegisterComponent from '../../Components/RegisterComponent/RegisterComponent';
import ReactGA from 'react-ga'
class Register extends Component {
    componentDidMount(){
        ReactGA.pageview(this.props.location.pathname+ this.props.location.search);
        console.log('page=>',this.props.location.pathname);    
        }

    render() {
        return (
            <div>
                <RegisterComponent />
            </div>
        );
    }
}

export default Register;
