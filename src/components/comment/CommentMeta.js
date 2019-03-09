import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './CommentMeta.css';

const CommentMeta = ({author, created_at_i, story_title, objectID, id, story_id}) => 
    <div className = 'CommentMeta'>
        <Link 
            className = 'CommentMeta__itemLink' 
            to = {`user?id=${author}`}
        >
            {author}
        </Link>

        <Link 
            className = 'CommentMeta__itemLink' 
            to = {`item?id=${objectID? objectID: id}`}
        >
            {moment.unix(created_at_i).fromNow()}
        </Link>  

        { story_title && 

            <span> 
                <span> | on: </span>

                <Link 
                    className = 'CommentMeta__itemLink' 
                    to = {`item?id=${story_id}`}>
                        {story_title}
                </Link>
            </span>

        }
    </div>
 
export default CommentMeta;