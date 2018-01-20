import React from 'react';
import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import {  routerReducer } from 'react-router-redux';
import {localeReducer} from 'react-localize-redux';


const store = combineReducers({
    posts: PostsReducer,
    routing: routerReducer,
    locale: localeReducer,
});

export default store;