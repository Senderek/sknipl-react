import React, { Component } from 'react';
import Fbpm from '../compontents/Fbpm';

class Home extends Component {
    render() {
        return (

            <div className="App">
                <div class="py-1 text-white bg-secondary" >
                    <div class="container">
                    <div class="row">
                        <div class="col-md-7 text-md-left text-center align-self-center my-5">
                            <h1 class="display-1">Kappa!</h1>
                            <p class="lead">Kappa, Kappa</p>
                        </div>
                    </div>
                    </div>
                </div>
                <Fbpm />
            </div>
        );
    }
}

export default Home;