import React, {Component} from 'react';
import './AuthForm.css';
import {withRouter} from 'react-router-dom';

class Form extends Component{

    state = {
        username: '',
        password: ''
    }
  
    handleChange = e => {
      this.setState({
        [e.target.id]: e.target.value
      });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.login(); 
        this.props.history.goBack();
    }
    
    render(){
        return(

            <div>
                <h2 className = 'AuthForm__heading'>{this.props.heading}</h2>
                
                <br/>
                
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label htmlFor = 'username'>username:&nbsp;</label>
                        <input 
                            type = 'text' 
                            name = 'username' 
                            onChange = {this.handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor= 'password'>password:&nbsp;</label>
                        <input 
                            type = 'password'
                            name = 'password' 
                            onChange = {this.handleChange}
                            required
                        />
                    </div>

                    <br/>

                    <button>
                        {this.props.btnLabel}
                    </button>

                </form>
            </div>
        )
    }
}
 
export default withRouter(Form);