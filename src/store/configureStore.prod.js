import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import promise from 'redux-promise';
import ReduxThunk from 'redux-thunk'

const enhancer = applyMiddleware(promise, ReduxThunk);

export default function configureStore(initialState) {
    // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
    // See https://github.com/rackt/redux/releases/tag/v3.1.0
    return createStore(rootReducer, initialState, enhancer);
};