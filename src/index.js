import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers} from 'redux';
import './index.css';
import App from './compontents/App';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import {localeReducer} from 'react-localize-redux';
import {initialize} from 'react-localize-redux';
import { addTranslation } from 'react-localize-redux';

const languages = [
    {name: 'English', code: 'en'},
    {name: 'Polski', code: 'pl'},
];

let store = createStore(combineReducers({
    locale: localeReducer
}));

store.dispatch(initialize(languages, {defaultLanguage: 'pl'}));
var translationsJSON = {
    "Title": [
        "SKNO KOD & RG.NET",
        "Strona startowa SKNI KOD & RG.NET",
    ],
    "Get_started": [
        "To get started, edit <code>src/App.js</code> and save to reload.",
        "Aby rozpocząć wystarczy rozpoczac edycje <code>src/App.js</code> i zapisać.",
    ]
}
store.dispatch(addTranslation(translationsJSON));

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
