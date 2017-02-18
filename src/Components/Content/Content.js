import React, { Component } from 'react';

import './Content.scss';

import About from './About/About';
import Skills from './Skills/Skills';

class Content extends Component {
    render() {
        return (
            <div className="Content">
                <div className="content">
                    <div className="container">
                        <About />
                        <Skills />
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
