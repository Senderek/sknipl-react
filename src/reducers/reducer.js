import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import {  routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    posts: PostsReducer,
    routing: routerReducer
});

export default rootReducer;