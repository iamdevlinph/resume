import React, { Component } from 'react';

import './Content.scss';

import About from './About/About';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Experience from './Experience/Experience';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <About />
                    <Skills />
                    <Portfolio />
                    <Experience />
                </div>
            </div>
        );
    }
}

export default Content;
