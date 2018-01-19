import React from 'react';
import {render} from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore.js';



// const languages = [
//     {name: 'English', code: 'en'},
//     {name: 'Polski', code: 'pl'},
// ];
//
// const createStoreWithMiddleware = applyMiddleware(
//     promise
// )(createStore);
// const postReducer = createStoreWithMiddleware(reducers);
//
// let store = createStore(combineReducers({
//     locale: localeReducer,
//     state: postReducer,
//     routing: routerReducer
// }));
//
// store.dispatch(initialize(languages, {defaultLanguage: 'pl'}));
// var translationsJSON = {
//     "Title": [
//         "SKNO KOD & RG.NET",
//         "Strona startowa SKNI KOD & RG.NET",
//     ],
//     "Get_started": [
//         "To get started, edit <code>src/App.js</code> and save to reload.",
//         "Aby rozpocząć wystarczy rozpoczac edycje <code>src/App.js</code> i zapisać.",
//     ]
// }

//store.dispatch(addTranslation(translationsJSON));
const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store)
render(
    <Provider store={store}>
        <Router history={history} routes={routes}>

        </Router>
    </Provider>,
document.getElementById('root')
)

registerServiceWorker();
