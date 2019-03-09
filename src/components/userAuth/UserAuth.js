import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './UserAuth.css';
import AuthForm from '../authForm/AuthForm';

class UserAuth extends Component {

    componentDidMount = () => {
        if(this.props.isAuthenticated){
            this.props.history.goBack();
        }
    }

    render(){
        return(
            <section>
                <AuthForm heading = {'Login'} btnLabel = {'login'} login = {this.props.login}/><br/>
                <AuthForm heading = {'Create Account'} btnLabel = {'create account'} login = {this.props.login}/>
            </section>
        )
    }
}

export default withRouter(UserAuth);