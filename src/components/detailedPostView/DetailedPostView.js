import React from "react";

import countComments from "../../utils/countComments";

import "./DetailedPostView.css";

import Story from "../story/Story";
import CommentList from "../commentList/CommentList";
import Comment from "../comment/Comment";

const DetailedPostView = ({ data }) => (
    <div className="DetailedPostView">
        {data.type == "story" ? (
            <>
                <Story {...data} num_comments={countComments(data)} />

                <div>
                    <h1 className="DetailedPostView__commentsHeading">
                        Comments
                    </h1>
                    <CommentList data={data.children} />
                </div>
            </>
        ) : (
            <Comment {...data} />
        )}
    </div>
);

export default DetailedPostView;
