import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './StoryHeading.css';
import urlParse from 'url-parse';

const StoryHeading = ({title, url, objectID, location}) => {
    var parsedUrl = new urlParse(url);

    return (
        <div className = 'StoryHeading'>
            {
                location.pathname === '/ask' ?
                    <Link className = 'StoryHeading__title StoryHeading__itemLink' to = {`/item?id=${objectID}`}>
                        {title} 
                    </Link>
                    :<>
                        <a className = 'StoryHeading__title StoryHeading__itemLink' href = {url? url: objectID}>
                            <span>{title} </span> 
                        </a>
                        {
                            url &&
                            <span>
                                <a className = 'StoryHeading__urlLink StoryHeading__itemLink' href = {url}>
                                    <small>({parsedUrl.origin})</small>
                                </a> 
                            </span>
                        }
                    </>
            }
        </div>
    )
}

export default withRouter(StoryHeading);