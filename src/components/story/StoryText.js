import React from "react";
import "./StoryText.css";

const StoryText = ({ text }) => (
    <div className="StoryText" dangerouslySetInnerHTML={{ __html: text }} />
);

export default StoryText;
