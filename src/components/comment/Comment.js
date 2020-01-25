import React from "react";

import "./Comment.css";

import CommentMeta from "./CommentMeta";
import CommentText from "./CommentText";

const Comment = ({
    author,
    created_at_i,
    story_title,
    objectID,
    story_id,
    id,
    comment_text,
    text
}) => (
    <article>
        <div className="Comment">
            <CommentMeta
                author={author}
                created_at_i={created_at_i}
                story_title={story_title}
                objectID={objectID}
                id={id}
                story_id={story_id}
            />
            <CommentText comment_text={comment_text} text={text} />
        </div>
    </article>
);

export default Comment;
