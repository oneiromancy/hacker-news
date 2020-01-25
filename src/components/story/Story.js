import React from "react";

import "./Story.css";

import StoryHeading from "./StoryHeading";
import StoryMeta from "./StoryMeta";
import StoryText from "./StoryText";

const Story = ({
    title,
    url,
    author,
    points,
    num_comments,
    created_at_i,
    objectID,
    id,
    text
}) => (
    <article>
        <div className="Story">
            <StoryHeading title={title} url={url} objectID={objectID} />
            <StoryMeta
                author={author}
                points={points}
                num_comments={num_comments}
                created_at_i={created_at_i}
                objectID={objectID}
                id={id}
            />
            {text && <StoryText text={text} />}
        </div>
    </article>
);

export default Story;
