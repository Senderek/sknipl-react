import React, { Component } from 'react';
import PostsList from '../containers/PostsListContainer.js';
import Fbpm from '../compontents/Fbpm';

class PostsIndex extends Component {
    render() {
        return (
            <div className="App">
                <div className="p-5">
                    <div className="container-fluid">
                        <div className="row">
                            <PostsList />
                            <Fbpm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostsIndex;