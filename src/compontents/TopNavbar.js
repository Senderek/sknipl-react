import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../profile_pic.png';


class TopNavbar extends Component {

    render() {
        var logoStyle = {
            width: '50px'
        }

        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand">
                    <Link to="/"> <img src={logo} style={logoStyle} /> </Link>
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={`/about`} className="nav-link" activeClassName="nav-link active">O nas</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/posts`} className="nav-link" activeClassName="nav-link active">Sekcje</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/posts`} className="nav-link" activeClassName="nav-link active">Projekty</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/posts`} className="nav-link" activeClassName="nav-link active">Artykuły</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default TopNavbar;