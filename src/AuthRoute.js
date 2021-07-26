import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({ component : Component, authenticated,  ...rest }) => (
    <Route 
    {...rest}
    render={(props)=> authenticated === true ? <Redirect to='/'/> : <Component {...props}/>
}
/>
)
const mapStateToProps = (state) => ({
    authenticated : state.auth.authenticated
});

export default connect(mapStateToProps)(AuthRoute);
