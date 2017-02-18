import React, { Component } from 'react';

import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
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
                                <li><a href="#">About</a></li>
                                <li><a href="#">Skills</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Experience</a></li>
                                <li><a href="#">Contact</a></li>
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
