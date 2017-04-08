import React, { Component } from 'react';
import Scroll from 'react-scroll';

import './Navbar.scss';

var Link = Scroll.Link;
var scroller = Scroll.scroller;

class Navbar extends Component {
    componentDidMount() {
        scroller.scrollTo('about', {
            duration: 1500,
            delay: 100,
            smooth: true,
        })
    }
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
                            {/*<a href="javascript:;" className="logo">iamDevlinPH</a>*/}
                            <ul className="right hide-on-med-and-down">
                                <li><Link activeClass="active" className="navbar__item waves-effect" to="about" spy={true} smooth={true} duration={500} isDynamic={true}>About</Link></li>
                                <li><Link activeClass="active" className="navbar__item waves-effect" to="skills" spy={true} smooth={true} duration={500} isDynamic={true}>Skills</Link></li>
                                <li><Link activeClass="active" className="navbar__item waves-effect" to="experience" spy={true} smooth={true} duration={500} isDynamic={true}>Experience</Link></li>
                                <li><Link activeClass="active" className="navbar__item waves-effect" to="portfolio" spy={true} smooth={true} duration={500} isDynamic={true}>Portfolio</Link></li>
                                <li><Link activeClass="active" className="navbar__item waves-effect" to="education" spy={true} smooth={true} duration={500} isDynamic={true}>Education</Link></li>
                                {/*<li><Link activeClass="active" className="navbar__item" to="contact" spy={true} smooth={true} duration={500} isDynamic={true}>Contact</Link></li>*/}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;
