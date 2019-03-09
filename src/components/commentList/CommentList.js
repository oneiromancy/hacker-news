import React from 'react';
import './CommentList.css';
import Comment from '../comment/Comment';
import withItemListData from '../../hoc/withItemListData';

const CommentList = ({data}) =>
    <>
        {
            data.map( (entry, index) => {
                const childComments = entry.children? entry.children: [];

                return (
                    <div key = {index}>
                        <Comment
                            {...entry}
                        />
                        <div className = 'CommentList__nestedComments'>
                            { 
                                childComments.length > 0 && 
                                <CommentList 
                                    data = {entry.children}
                                />
                            }
                        </div>
                    </div>
                )
            })
        }
    </>

const CommentListWithData = withItemListData(CommentList);

export {
    CommentList,
    CommentListWithData   
}