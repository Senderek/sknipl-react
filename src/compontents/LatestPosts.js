import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LatestPosts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    
      
    renderLatestPosts(posts) {
        function compare(a,b) {
            if (a.publication_date < b.publication_date)
              return -1;
            if (a.publication_date > b.publication_date)
              return 1;
            return 0;
        }
        console.log(posts);
        var latestPosts = posts.sort(compare);
        if(latestPosts.length > 5)
        {
            latestPosts = latestPosts.slice(0,5);
        }
        console.log(latestPosts);
        return latestPosts.map((latestPosts) => {
            return (
                // <li className="list-group-item" key={post.id}>
                //     {/*<Link style={{color:'black'}} to={"posts/" + post._id}>*/}
                //         {/*<h3 className="list-group-item-heading">{post.title}</h3>*/}
                //     {/*</Link>*/}
                //         <span key={post.id + 'span'}>{post.text}</span>
                // </li>
                <li class="list-group-item d-flex justify-content-between align-items-center"> 
                    {latestPosts.title}
                </li>
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
            <div>
                <h4 className="">Najnowsze artykuły</h4>
                <ul className="list-group my-3">
                    {this.renderLatestPosts(posts)}
                </ul>
            </div>
        );
    }
}

export default LatestPosts;