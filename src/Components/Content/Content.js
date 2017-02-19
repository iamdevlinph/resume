import React, { Component } from 'react';

import './Content.scss';

import About from './About/About';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <About />
                    <Skills />
                    <Portfolio />
                    <Experience />
                    <Contact />
                </div>
            </div>
        );
    }
}

export default Content;
