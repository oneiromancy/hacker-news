import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import "./UserProfile.css";

const UserProfile = ({ data }) => (
    <div>
        <div className="UserDetails__username">
            <span className="UserDetails__section">user: </span>
            <span>
                <Link
                    className="UserDetails__itemLink"
                    to={`user?id=${data.username}`}
                >
                    {data.username}
                </Link>
            </span>
        </div>

        <div className="UserDetails__accountCreationDate">
            <span className="UserDetails__section">created: </span>
            <span>{moment.unix(data.created_at_i).calendar()}</span>
        </div>

        <div className="UserDetails__karma">
            <span className="UserDetails__section">karma: </span>
            <span>{data.karma}</span>
        </div>

        <div className="UserDetails__about">
            <span className="UserDetails__section">about: </span>
            <span dangerouslySetInnerHTML={{ __html: data.about }} />
        </div>
        <div className="UserDetails__itemLinkContainer">
            <span>
                <Link
                    className="UserDetails__itemLink"
                    to={`submitted?id=${data.username}`}
                >
                    submissions
                </Link>
            </span>
            <span>
                <Link
                    className="UserDetails__itemLink"
                    to={`threads?id=${data.username}`}
                >
                    comments
                </Link>
            </span>
        </div>
    </div>
);

export default UserProfile;
