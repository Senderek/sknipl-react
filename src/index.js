import React from 'react';
import {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore} from 'react-router-redux'
import configureStore from './store/configureStore.js';
import routes from './routes'

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);
render(
    <Provider store={store}>
        <Router history={history} routes={routes}>

        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
