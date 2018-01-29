import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App.js'
import PostsIndex from './pages/PostsIndex.js';
import Home from './pages/Home.js';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="posts" component={PostsIndex} />
    </Route>

);