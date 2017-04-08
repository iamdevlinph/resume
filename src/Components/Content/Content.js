import React, { Component } from 'react';
import Scroll from 'react-scroll';

import './Content.scss';

import About from './About/About';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Portfolio from './Portfolio/Portfolio';
import Education from './Education/Education';
// import Contact from './Contact/Contact';

var Element = Scroll.Element;

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <Element name="about">
                        <About />
                    </Element>
                    <Element name="skills">
                        <Skills />
                    </Element>
                    <Element name="experience">
                        <Experience />
                    </Element>
                    <Element name="portfolio">
                        <Portfolio />
                    </Element>
                    <Element name="education">
                        <Education />
                    </Element>
                    {/* <Element name="contact">
                        <Contact />
                    </Element> */}
                </div>
            </div>
        );
    }
}

export default Content;
