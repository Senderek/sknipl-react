import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsList extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts(posts) {
        return posts.map((post) => {
            return (
                // <li className="list-group-item" key={post.id}>
                //     {/*<Link style={{color:'black'}} to={"posts/" + post._id}>*/}
                //         {/*<h3 className="list-group-item-heading">{post.title}</h3>*/}
                //     {/*</Link>*/}
                //         <span key={post.id + 'span'}>{post.text}</span>
                // </li>

                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4">{post.title}</h1>
                        <p className="">{post.text}</p>
                    </div>
                </div>
            );
        });
    }

    render() {
        const { posts, loading, error } = this.props.postsList;

        if(loading) {
            return <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>
        } else if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            <div className="col-md-8">
                {this.renderPosts(posts)}
            </div>
        );
    }
}

export default PostsList;