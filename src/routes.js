import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/home";
import Layout from "./hoc/Layout/layout";

import NewsArticles from "./components/Articles/News/Post/index";
import VideoArticles from "./components/Articles/Videos/Video/index";
import NewsMain from "./components/Articles/News/Main/index";
import VideosMain from "./components/Articles/Videos/Main/index";
import SignIn from "./components/signin/signin";

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/news" exact component={NewsMain} />
                    <Route
                        path="/articles/:id"
                        exact
                        component={NewsArticles}
                    />
                    <Route path="/videos/:id" exact component={VideoArticles} />
                    <Route path="/videos" exact component={VideosMain} />
                    <Route path="/sign-in" exact component={SignIn} />
                </Switch>
            </Layout>
        );
    }
}

export default Routes;
