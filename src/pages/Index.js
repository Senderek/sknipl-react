import React, { Component } from 'react';
import PostsList from '../containers/PostsListContainer.js';

class PostsIndex extends Component {
    render() {
        return (
            <div>
                <PostsList />
            </div>
        );
    }
}

export default PostsIndex;