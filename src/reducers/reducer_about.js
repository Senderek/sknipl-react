import {
    FETCH_ABOUT, FETCH_ABOUT_SUCCESS, FETCH_ABOUT_FAILURE
} from '../actions/about';


const INITIAL_STATE = { aboutList: {about: [], error:null, loading: false}};

export default function(state = INITIAL_STATE, action) {
    let error;
    switch (action.type) {
        case FETCH_ABOUT:
            return {...state, aboutList: {about: [], error:null, loading: false}};
        case FETCH_ABOUT_SUCCESS:
            return {...state, aboutList: {about: action.payload, error: null, loading: false}};
        case FETCH_ABOUT_FAILURE:
            if (action.payload != null) {
                error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            }
            else
            {
                error = null;
            }
            return {...state, aboutList: {about: [], error: error, loading: false}};
        default:
            return state;
    }
}