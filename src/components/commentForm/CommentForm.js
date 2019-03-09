import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './CommentForm.css';

class CommentForm extends Component {

    handleCommentSubmission = (e) => {
        e.preventDefault();

        if(this.props.isAuthenticated){
            // persist comment, that is, insert it into a DB via fetch/axios's POST method 
            this.props.history.push('/comment');

        } else{
            this.props.history.push('/login');
        }

    }

    render(){
        return(
            <form onSubmit = {this.handleCommentSubmission}>
                <div className = 'CommentForm__textareaContainer'>
                    <textarea className = 'CommentForm__textarea'/>
                </div>
                <button className = 'CommentForm__button'>add comment</button>
            </form>
        )
    }
}
 
export default withRouter(CommentForm);