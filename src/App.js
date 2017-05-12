import React, { Component } from 'react';
import './main.scss';
import './App.scss';

import * as dateUtils from './utils/date.util.js';

import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Portfolio from './Components/Portfolio/Portfolio';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div id="wrapper" className="marg-top marg-bottom">
                    <div className="container" id="print-container">
                        <div className="row ">

                            {/*<!-- START ABOUT -->*/}
                            <About />
                            {/*<!-- END ABOUT -->*/}

                            {/*<!-- START RESUME -->*/}
                            <div className="col-md-9 right-col">
                                <section className="offset-bottom">
                                    <div className="resume">
                                        {/*<!-- START EXPERIENCE -->*/}
                                        <div className="resume-card">
                                            <Experience dateUtils={dateUtils} />
                                        </div>

                                        {/*<!-- END EXPERIENCE -->*/}

                                        {/*<!-- START SKILLS -->*/}
                                        <div className="resume-card">
                                            <Skills dateUtils={dateUtils} />
                                        </div>
                                        {/*<!-- END SKILLS -->*/}

                                        {/*<!-- START EDUCATION -->*/}
                                        <div className="resume-card">
                                            <Education />
                                        </div>
                                        {/*<!-- END EDUCATION -->*/}

                                        {/*<!-- START PORTFOLIO -->*/}
                                        <div className="resume-card">
                                            <Portfolio />
                                        </div>
                                        {/*<!-- END PORTFOLIO -->*/}
                                    </div>
                                </section>
                            </div>
                            {/*<!-- END RESUME -->*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
