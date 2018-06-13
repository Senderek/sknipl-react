import React from 'react';
import { Component } from 'react';
import AppContainer from '../containers/AppContainer';
import TopNavbar from '../compontents/TopNavbar';
import Footer from '../compontents/Footer';

export default class App extends Component {
    render() {
        return (
            <AppContainer>
                <TopNavbar />
                <div className="container-fluid">
                    {this.props.children}
                </div>
                <Footer/>
            </AppContainer>
        );
    }
}