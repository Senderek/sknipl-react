import React, { Component } from 'react';
import PostsList from '../src/containers/PostsListContainer.js';
import Fbpm from '../src/compontents/Fbpm';
import { Router, browserHistory, Route } from 'react-router'
import routes from './routes'
import '../src/App.css';
import TopNavbar from '../src/compontents/TopNavbar';

import Home from './pages/Home.js';
class App extends Component {
    render() {
        return (
            <div>
            <Router history={this.props.history}>

                <TopNavbar />
                <div className="container-fluid">
                <Route exact path="/" component={Home} />
                </div>
            </Router>
            </div>
        )
    }
}

export default App;