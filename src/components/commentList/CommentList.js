import React from "react";

import "./CommentList.css";

import Comment from "../comment/Comment";

const CommentList = ({ data }) => (
    <div className="CommentList">
        {data.map((entry, index) => {
            const childComments = entry.children ? entry.children : [];

            return (
                <div key={index}>
                    <Comment {...entry} />
                    <div className="CommentList__nestedComments">
                        {childComments.length > 0 && (
                            <CommentList data={entry.children} />
                        )}
                    </div>
                </div>
            );
        })}
    </div>
);

export default CommentList;
