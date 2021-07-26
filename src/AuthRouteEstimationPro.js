import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AuthRouteEstimationPro = ({ component : Component, authenticated, ...rest }) => (
    
    <Route 
    {...rest}
    render={(props)=> authenticated === true ?    <Component {...props}/> : <Redirect to="/estimation"/>}
/>
)
const mapStateToProps = (state) => ({
    authenticated : state.auth.authenticated
});

export default connect(mapStateToProps)(AuthRouteEstimationPro);
