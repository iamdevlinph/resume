import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.scss';

// import Navbar from './Components/Navbar/Navbar';
// import Content from './Components/Content/Content';
// import Footer from './Components/Footer/Footer';

import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Portfolio from './Components/Portfolio/Portfolio';

import './css/bootstrap.scss';
import './css/font.scss';
import './css/fontello.scss';
import './css/base.scss';
import './css/main.scss';
import './css/timeline.scss';
import './css/custom.scss';

// import './js/jquery-1.11.3.min.js';
// import './js/jquery-migrate-1.2.1.js';
// import './js/modernizr.js';
// import './js/placeholders.min.js';
// import './js/script.js';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div id="wrapper" className="margLTop margLBottom">
                    <div className="container">
                        <div className="row ">

                            {/*<!-- START ABOUT -->*/}
                            <About />
                            {/*<!-- END ABOUT -->*/}

                            {/*<!-- START RESUME -->*/}
                            <div className="col-md-9 right-content">
                                <section className="ofsInBottom">
                                    <div className="resume">
                                        {/*<!-- START SKILLS -->*/}
                                        <div className="resume-card">
                                            <Skills />
                                        </div>
                                        {/*<!-- END SKILLS -->*/}

                                        {/*<!-- START EXPERIENCE -->*/}
                                        <div className="resume-card">
                                            <Experience />
                                        </div>
                                        {/*<!-- END EXPERIENCE -->*/}

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
