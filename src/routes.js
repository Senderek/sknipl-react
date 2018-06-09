import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App.js'
import PostsIndex from './pages/PostsIndex.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import About from './pages/About.js';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="posts" component={PostsIndex} />
        <Route path="about" component={About}/>
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
    </Route>

);