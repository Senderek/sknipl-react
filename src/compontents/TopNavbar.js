import React, { Component } from 'react';
import {
    NavLink
} from "react-router-dom";
import logo from '../profile_pic.png'


class TopNavbar extends Component {

    render() {

        var logoStyle ={
            width: '50px'
        }

        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a class="navbar-brand">
                    <img src={logo} alt="logo" style={logoStyle}/>
                </a>
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Link</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default TopNavbar;