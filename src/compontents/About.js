import React from 'react';
import { Component } from 'react';


class About extends Component {
    componentWillMount() {
        this.props.fetchAbout();
    }

    renderAbout(about) {
        var first = about.find( (x)=> x.isVisible === true);
        if(first !== undefined)
        {
            return (
                <div>
                     <h2>{first.title}</h2>
                    <p>{first.content}</p>
                </div>
            );
        }
    }

    render() {
        const { about, error, loading } = this.props.aboutList;

        if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            <div>
                {this.renderAbout(about)}
            </div>
        )
    }
}

export default About;