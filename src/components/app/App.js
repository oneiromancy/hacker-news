import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Navbar from "../navbar/Navbar";
import StoryList from "../storyList/StoryList";
import CommentList from "../commentList/CommentList";
import UserProfile from "../userProfile/UserProfile";
import DetailedPostView from "../detailedPostView/DetailedPostView";
import withItemData from "../../hoc/withItemData";
import withListData from "../../hoc/withListData";

const App = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
            <nav>
                <Navbar />
            </nav>

            <main>
                <div className="App__main">
                    <Route exact path="/" component={withListData(StoryList)} />
                    <Route path="/newest" component={withListData(StoryList)} />
                    <Route path="/ask" component={withListData(StoryList)} />
                    <Route path="/show" component={withListData(StoryList)} />
                    <Route path="/jobs" component={withListData(StoryList)} />
                    <Route
                        path="/newcomments"
                        component={withListData(CommentList)}
                    />
                    <Route path="/user" component={withItemData(UserProfile)} />
                    <Route
                        path="/submitted"
                        component={withListData(StoryList)}
                    />
                    <Route
                        path="/threads"
                        component={withListData(CommentList)}
                    />
                    <Route
                        path="/item"
                        component={withItemData(DetailedPostView)}
                    />
                </div>
            </main>
        </div>
    </Router>
);

export default App;
