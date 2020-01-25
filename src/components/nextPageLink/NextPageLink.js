import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./NextPageLink.css";

const NextPageLink = ({ nextPage, currentPage, location, query }) => {
    const { id } = query;

    return (
        <Link
            className="NextPageLink"
            onClick={nextPage}
            to={`${location.pathname}${
                id
                    ? `?id=${id}&page=${currentPage + 1}`
                    : `?page=${currentPage + 1}`
            }`}
        >
            More
        </Link>
    );
};

export default withRouter(NextPageLink);
