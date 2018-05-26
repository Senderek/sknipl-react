import { connect } from 'react-redux'
import userActions from '../actions/auth.js';
import RegisterForm from '../compontents/RegisterForm.js';


const mapStateToProps = (state) => {
    return {
        register: state.registration
    };
}



export default connect(mapStateToProps, null)(RegisterForm);