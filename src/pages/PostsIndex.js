import React, { Component } from 'react';
import PostsList from '../containers/PostsListContainer.js';
import Fbpm from '../compontents/Fbpm';

class PostsIndex extends Component {
    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="column left">
                        <PostsList className="column left" />
                    </div>
                    <div className="column left">
                        <Fbpm className="column right" />
                    </div>
                </div>
            </div>
        );
    }
}

export default PostsIndex;