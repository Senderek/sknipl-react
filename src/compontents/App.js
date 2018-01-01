import React from 'react';
import { localize } from 'react-localize-redux';
import logo from '../logo.svg';
import '../App.css';
import Test from '../compontents/Test';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';


const App = ({ translate, currentLanguage }) => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">{ translate('Title') }</h1>
        </header>
        <p className="App-intro">
            { translate('Get_started') }
        </p>

    </div>

)

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});

export default localize(App, 'locale');
