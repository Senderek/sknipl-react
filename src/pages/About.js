import React, { Component } from 'react';
import Fbpm from '../compontents/Fbpm';
import AboutContainer from '../containers/AboutContainer.js';

class About extends Component {

    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="column left">
                        <AboutContainer className="column left"/>
                    </div>
                    <div className="column left">
                        <Fbpm className="column right" />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;