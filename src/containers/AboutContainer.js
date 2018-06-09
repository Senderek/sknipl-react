import { connect } from 'react-redux'
import { fetchAbout, fetchAboutSuccess, fetchAboutFailure } from '../actions/about';
import About from '../compontents/About.js';

const mapStateToProps = (state) => {
    return {
        aboutList: state.about.aboutList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAbout: () => {
            dispatch(fetchAbout()).then((response) => {
                !response.error ? dispatch(fetchAboutSuccess(response.payload.data)) : dispatch(fetchAboutFailure(response.payload.data));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);