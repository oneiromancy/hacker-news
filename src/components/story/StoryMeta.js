import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './StoryMeta.css';
import moment from 'moment';

const StoryMeta = ({author, points, num_comments, created_at_i, location, objectID, id}) => 
    <div className = 'StoryMeta'>
        {
            location.pathname === '/jobs'?

            <Link 
                className = 'StoryMeta__itemLink' 
                to = {`item?id=${objectID? objectID: id}`}
            >
                {moment.unix(created_at_i).fromNow()}
            </Link>

            :<div>
                <span>
                    {points} points by&nbsp;
                    <Link className = 'StoryMeta__itemLink' to = {`user?id=${author}`}>
                        {author}
                    </Link> 
                </span>
                <Link 
                    className = 'StoryMeta__itemLink' 
                    to = {`item?id=${objectID? objectID: id}`}
                >
                    &nbsp;
                    {moment.unix(created_at_i).fromNow()}
                </Link>
                <span>&nbsp;|&nbsp;</span>
                <Link 
                    className = 'StoryMeta__itemLink' 
                    to = {`item?id=${objectID? objectID: id}`}
                >
                    {num_comments?num_comments: 0} comments
                </Link>
            </div>          
        }
    </div>
 
export default withRouter(StoryMeta);