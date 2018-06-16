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
                <div className="p-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12" >
                                <h1 className="display-4">{first.title}</h1>
                                <p className="">{first.content}</p>
                            </div>
                        </div>
                    </div>
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