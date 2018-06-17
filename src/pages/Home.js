import React, { Component } from 'react';
import Fbpm from '../compontents/Fbpm';
import PostsList from '../containers/PostsListContainer.js';
import LatestPosts from '../containers/LatestPostsContainer';


class Home extends Component {
    render() {
        return (

            <div className="App">
                <div className="py-1 text-white bg-secondary" >
                    <div className="container">
                    <div className="row">
                        <div className="col-md-7 text-md-left text-center align-self-center my-5">
                            <h1 className="display-1">Kappa!</h1>
                            <p className="lead">Kappa, Kappa</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="p-5">
                    <div className="container-fluid">
                        <div className="row">
                            <PostsList />
                            <div className="col-md-4 right" >
                                <LatestPosts/>
                                <Fbpm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;