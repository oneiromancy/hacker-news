import React from 'react';
import './CreatePost.css';

const CreatePost = () => 
    <div className = 'CreatePost'>
        
        <form className = 'CreatePost__form'>
            <div className = 'CreatePost__inputContainer'>
                <label className = 'CreatePost__label' htmlFor='title'>title</label>
                <input className = 'CreatePost__input' type='text' name='title' required/>
            </div>

            <div className = 'CreatePost__inputContainer'>
                <label className = 'CreatePost__label' htmlFor='url'>url</label>
                <input className = 'CreatePost__input' type='text' name='url' required/>
            </div>

            <div className = 'CreatePost__optionDivider'>or</div>

            <div className = 'CreatePost__inputContainer'>
                <label className = 'CreatePost__label' htmlFor='text'>text</label>
                <textarea className = 'CreatePost__input CreatePost__textarea'/>
            </div>

            <button className = 'CreatePost__btn'>submit</button>
        </form>

        <div className = 'CreatePost__instructionMsg'>
            Leave url blank to submit a question for discussion. If there is no url, the text (if any) will appear at the top of the thread.
        </div>

    </div>


export default CreatePost;