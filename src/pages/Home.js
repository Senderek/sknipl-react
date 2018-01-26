import React, { Component } from 'react';
import Fbpm from '../compontents/Fbpm';

class Home extends Component {
    render() {
        return (

            <div className="App">
                <div className="jumbotron">
                    Kappa!
                </div>
                <Fbpm />
            </div>
        );
    }
}

export default Home;