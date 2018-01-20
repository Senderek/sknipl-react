import React, {Component} from 'react';
import PostsList from '../containers/PostsListContainer.js';
import Fbpm from '../compontents/Fbpm';
import logo from '../logo.svg';
import '../App.css';

class PostsIndex extends Component {
    render() {
        return (

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Tytul</h1>
                </header>
                <div className="row">
                    <div className="column left">
                        <PostsList className="column left"/>
                    </div>
                    <div className="column left">
                        <Fbpm className="column right"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostsIndex;