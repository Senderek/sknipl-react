import axios from 'axios';
import {API_URL} from '../globalSettings';

export const FETCH_ABOUT = 'FETCH_ABOUT';
export const FETCH_ABOUT_SUCCESS = 'FETCH_ABOUT_SUCCESS';
export const FETCH_ABOUT_FAILURE = 'FETCH_ABOUT_FAILURE';


const ROOT_URL = API_URL;

export function fetchAbout() {
    const request = axios({
        method: 'get',
        url: `${ROOT_URL}/aboutdata/`,
        ContentType: 'application/json',
        Vary: 'Accept',
    });
    return {
        type: FETCH_ABOUT,
        payload: request
    };
}

export function fetchAboutSuccess(about) {
    return {
        type: FETCH_ABOUT_SUCCESS,
        payload: about
    };
}

export function fetchAboutFailure(error) {
    return {
        type: FETCH_ABOUT_FAILURE,
        payload: error
    };
}