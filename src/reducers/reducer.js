import React from 'react';
import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import {  routerReducer } from 'react-router-redux';
import {localeReducer} from 'react-localize-redux';
import AuthReducer from './reducer_auth.js';
import RegisterReducer from './reducer_registration.js';
import AboutReducer from './reducer_about.js';


const store = combineReducers({
    posts: PostsReducer,
    routing: routerReducer,
    locale: localeReducer,
    register: RegisterReducer,
    auth: AuthReducer,
    about: AboutReducer,
});

export default store;