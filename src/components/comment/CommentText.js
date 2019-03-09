import React from 'react';
import './CommentText.css';

const CommentText = ({text, comment_text}) => {
    const commentText = text? text: comment_text;
    return(
        <div className = 'CommentText' dangerouslySetInnerHTML={{ __html: commentText }}/>
    )
}
export default CommentText;