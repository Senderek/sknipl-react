import React from 'react';
import { Component } from 'react';

export default class App extends Component {
    componentWillMount() {
        this.props.loadUserFromToken();
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

// import React from 'react';
// import { localize } from 'react-localize-redux';
// import logo from '../logo.svg';
// import '../App.css';
// import Fbpm from '../compontents/Fbpm';
//
//
// const App = ({ translate, currentLanguage }) => (
//     <div className="App">
//         <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo"/>
//             <h1 className="App-title">{ translate('Title') }</h1>
//         </header>
//         <p className="App-intro">
//             { translate('Get_started') }
//         </p>
// <Fbpm curLang={currentLanguage}/>
//     </div>
//
// );
//
// export default localize(App, 'locale');
