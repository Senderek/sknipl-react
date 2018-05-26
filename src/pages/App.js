import React from 'react';
import { Component } from 'react';
import AppContainer from '../containers/AppContainer';
import TopNavbar from '../compontents/TopNavbar';

export default class App extends Component {
    render() {
        return (
            <AppContainer>
                <TopNavbar />
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </AppContainer>
        );
    }
}