import React from 'react';
import { Component } from 'react';
import AppContainer from '../containers/AppContainer';
import TopNavbar from '../compontents/TopNavbar';

export default class App extends Component {
    render() {
        return (
            <AppContainer>
                <TopNavbar/>
                {this.props.children}
            </AppContainer>
        );
    }
}