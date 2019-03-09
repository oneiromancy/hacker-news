import React from 'react';
import './AuthBtn.css';
import {withRouter, Link} from "react-router-dom";

const AuthBtn = ({ location, isAuthenticated, logout }) =>
    isAuthenticated ?
        <Link
            className = 'AuthBtn__itemLink'
            onClick={() => {
                logout();
            }}
            to = {location.pathname}
        >
            logout
        </Link>
    : 
        <Link 
            className = 'AuthBtn__itemLink'
            to = '/login'
        >
            login
        </Link>        

export default withRouter(AuthBtn);