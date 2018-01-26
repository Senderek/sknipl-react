import React, { Component } from 'react';
import PostsList from '../src/containers/PostsListContainer.js';
import Fbpm from '../src/compontents/Fbpm';
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import '../src/App.css';
import TopNavbar from '../src/compontents/TopNavbar';


class App extends Component {
    render() {
        return (
            <div>
                <TopNavbar />
                <div className="container-fluid">
                    <Router history={this.props.history} routes={routes} />
                </div>
            </div>
        )
    }
}

export default App;