import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from '../profile_pic.png';


class TopNavbar extends Component {

    render() {
        var logoStyle ={
            width: '50px'
        }

        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
               <ul>
                    <Link to={`/posts`} activeClassName="active">LinkWorking</Link>
                </ul>
            </nav>
        );
    }
}

export default TopNavbar;