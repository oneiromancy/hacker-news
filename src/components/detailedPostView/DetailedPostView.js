import React from 'react';
import Story from '../story/Story';
import {CommentList} from '../commentList/CommentList';
import Comment from '../comment/Comment';
import CommentForm from '../commentForm/CommentForm';
import countComments from '../../utils/countComments';
import withItemData from '../../hoc/withItemData';

const DetailedPostView = ({data, isAuthenticated}) =>
    <> 
        { data.type !== 'comment'?
            <>
                <Story
                    {...data}
                    num_comments = {countComments(data)}
                />
                <CommentForm
                    isAuthenticated = {isAuthenticated}
                />
                <CommentList 
                    data = {data.children}
                />
            </>:
            <>
                <Comment {...data}/>
                <CommentForm/>
            </>
        }
    </>

export default withItemData(DetailedPostView);