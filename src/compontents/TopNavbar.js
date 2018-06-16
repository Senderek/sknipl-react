import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../profile_pic.png';
import TopNavbarAccountContainer from '../containers/TopNavbarAccountContainer';


class TopNavbar extends Component {

    render() {
        var logoStyle = {
            width: '50px'
        }

        var navPadding = {
            padding: '0px 30px'
        }

        return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <div className="container-fluid" style={navPadding}>
                    <a className="navbar-brand">
                        <Link to="/"> <img src={logo} style={logoStyle} /> </Link>
                    </a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#myNavBar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="navbar-nav ">
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
                        <TopNavbarAccountContainer/>
                    </div>
                </div>
            </nav>
        );
    }
}

export default TopNavbar;