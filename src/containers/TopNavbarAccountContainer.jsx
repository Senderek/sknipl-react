import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Auth from '../Helpers/Auth';
import { userActions } from '../actions/auth';

class TopNavbarAccountContainer extends Component {
    render() {
        var iconStyle = {
            verticalAlign: 'super'
        }

        if (Auth.isUserAuthenticated()) {
            return (
                <div className="navbar-nav ml-auto">
                    <p className="navbar-text">
                        {/* Hello {this.props.user}! */}
                    </p>
                    <li className="nav-link">
                        <i onClick={this.props.logout} className="fas fa-sign-out-alt fa-3x" title="Logout"></i>
                    </li>
                </div>
            );
        }
        else {
            return (
                <ul className="navbar-nav ml-auto">
                    <li><Link to={"/login"} className="nav-link" title="Sign In"><i className="fa fa-user-circle fa-2x" ></i><span style={iconStyle}> Zaloguj się</span></Link></li>

                    <li><Link to={"/register"} className="nav-link" title="Sign Up"><i className="fas fa-user-plus fa-2x" ></i><span style={iconStyle}> Rejestracja</span> </Link></li>
                </ul>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(userActions.logout());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNavbarAccountContainer);