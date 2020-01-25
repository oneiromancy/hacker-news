import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import queryString from "query-string";

import "./Navbar.css";

import MenuItem from "./MenuItem";

const Navbar = ({ location }) => {
    const userID = queryString.parse(location.search).id;

    return (
        <div className="Navbar">
            <NavLink
                exact
                to="/"
                className="Navbar__logo Navbar__itemLink"
                activeClassName="Navbar__logo Navbar__menuItem--active"
            >
                Hacker News
            </NavLink>

            <ul className="Navbar__menuList">
                <MenuItem pathnameLink="/newest">new</MenuItem>
                <MenuItem pathnameLink="/newcomments">comments</MenuItem>
                <MenuItem pathnameLink="/ask">ask</MenuItem>
                <MenuItem pathnameLink="/show">show</MenuItem>
                <MenuItem pathnameLink="/jobs">jobs</MenuItem>

                {location.pathname === "/submitted" && (
                    <li className="Navbar__menuItem Navbar__menuItem--active">
                        {`${userID}'s 'submissions`}
                    </li>
                )}

                {location.pathname === "/threads" && (
                    <li className="Navbar__menuItem Navbar__menuItem--active">
                        {`${userID}'s 'comments`}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default withRouter(Navbar);
