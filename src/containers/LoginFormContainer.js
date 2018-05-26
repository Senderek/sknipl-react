import { connect } from 'react-redux'
import LoginForm from '../compontents/LoginForm.js';


const mapStateToProps = (state) => {
    return {
        loggingIn: state.authentication
    };
}


export default connect(mapStateToProps, null)(LoginForm);