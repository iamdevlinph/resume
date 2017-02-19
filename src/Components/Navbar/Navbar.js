import React, { Component } from 'react';

import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-fixed">
                    <ul id="dropdown1" className="dropdown-content dropdown--top-space">
                        <li><a href="#">one</a></li>
                        <li><a href="#">two</a></li>
                        <li className="divider"></li>
                        <li><a href="#">three</a></li>
                    </ul>
                    <nav>
                        <div className="nav-wrapper">
                            <a href="#!" className="logo">iamDevlinPH</a>
                            <ul className="right">
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#contact">Contact</a></li>
                                {/*<li><a className="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>*/}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;
