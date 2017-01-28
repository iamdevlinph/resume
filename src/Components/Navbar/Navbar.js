import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <ul id="dropdown1" className="dropdown-content">
                    <li><a href="#!">one</a></li>
                    <li><a href="#!">two</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">three</a></li>
                </ul>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!">Logo</a>
                        <ul className="right">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
