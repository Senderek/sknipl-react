import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {localeReducer} from 'react-localize-redux';
import {initialize} from 'react-localize-redux';
import { addTranslation } from 'react-localize-redux';
import Root from './compontents/Root';
import promise from 'redux-promise';
import reducers from './reducers/reducer';
import Routes from './routes';
import { Provider } from 'react-redux';
import PostsIndex from "./pages/Index.js";
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


const languages = [
    {name: 'English', code: 'en'},
    {name: 'Polski', code: 'pl'},
];

const createStoreWithMiddleware = applyMiddleware(
    promise
)(createStore);
const postReducer = createStoreWithMiddleware(reducers);

let store = createStore(combineReducers({
    locale: localeReducer,
    posts: postReducer,
    routing: routerReducer
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

const history = syncHistoryWithStore(browserHistory, store)
render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={PostsIndex}>
            </Route>
        </Router>
    </Provider>,
document.getElementById('root')
)

registerServiceWorker();
