import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './reset.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import StoryList from './components/storyList/StoryList';
import {CommentListWithData} from './components/commentList/CommentList';
import UserProfile from './components/userProfile/UserProfile';
import UserAuth from './components/userAuth/UserAuth';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import CreatePost from './components/createPost/CreatePost';
import DetailedPostView from './components/detailedPostView/DetailedPostView';
    
class App extends Component {

    state = {
        isAuthenticated: false
    }

    login = () => {
        this.setState({isAuthenticated: true})
    }

    logout = () => {
        this.setState({isAuthenticated: false})
    }
    
    render(){
        return(
            <div className = 'App'>
                <Router basename = {process.env.PUBLIC_URL}>
                    <>
                        <nav>
                            <Navbar 
                                isAuthenticated = {this.state.isAuthenticated} 
                                logout = {this.logout}
                            />
                        </nav>

                        <main>
                            <div className = 'App__main'>
                                <Route exact path = '/' component={StoryList} />
                                <Route path = '/newest' component={StoryList} />
                                <Route path = '/ask' component={StoryList} />
                                <Route path = '/show' component={StoryList} />
                                <Route path = '/jobs' component={StoryList} />
                                <Route path = '/newcomments' component={CommentListWithData} />
                                <Route path = '/user' component={UserProfile} />
                                <Route path = '/submitted' component={StoryList} />
                                <Route path = '/threads' component={CommentListWithData} />
                                <Route 
                                    path = '/item' 
                                    render = { props => {
                                        return(
                                            <DetailedPostView 
                                                isAuthenticated = {this.state.isAuthenticated}
                                                {...props} 
                                            />
                                        )
                                    }}
                                />
                                <Route 
                                    path = '/login' 
                                    render = { props => {
                                        return (
                                            <UserAuth 
                                                isAuthenticated = {this.state.isAuthenticated} 
                                                login = {this.login} 
                                                {...props} 
                                            />
                                        )
                                    }}
                                />
                                <PrivateRoute 
                                    isAuthenticated = {this.state.isAuthenticated} 
                                    path = '/submit' 
                                    component = {CreatePost}
                                />
                            </div>
                        </main>
                    </>
                </Router>
            </div>
        )
    }
}

export default App;