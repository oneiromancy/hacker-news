import React from 'react';
import {NavLink} from 'react-router-dom';
import './MenuItem.css';

const MenuItem = ({pathnameLink, ...props}) => 
    <li className = 'Navbar__menuItem'>
        <NavLink 
            to = {pathnameLink}
            className = 'Navbar__itemLink' 
            activeClassName = 'Navbar__menuItem--active'
        >
            {props.children}
        </NavLink>
    </li>
 
export default MenuItem;