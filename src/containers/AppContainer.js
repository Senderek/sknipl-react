import React from 'react';
import { connect } from 'react-redux';
import App from '../compontents/App.js';

const mapDispatchToProps = (dispatch) => {
    return {
        loadUserFromToken: () => {
            return;

        },
    }
}


export default connect(null, mapDispatchToProps)(App);