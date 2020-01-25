import React from "react";

import Story from "../../components/story/Story";

const StoryList = ({ data }) => (
    <>
        {data.map((entry, index) => (
            <Story key={index} {...entry} />
        ))}
    </>
);

export default StoryList;
