import React, { Component } from 'react';

import './Content.scss';

import About from './About/About';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';

class Content extends Component {
    render() {
        return (
            <div className="Content">
                <div className="content">
                    <div className="container">
                        <About />
                        <Skills />
                        <Experience />
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
