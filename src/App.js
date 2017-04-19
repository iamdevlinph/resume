import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.scss';

// import Navbar from './Components/Navbar/Navbar';
// import Content from './Components/Content/Content';
// import Footer from './Components/Footer/Footer';

import About from './Components/About/About';
import Skills from './Components/Skills/Skills';

import './css/bootstrap.scss';
import './css/font.scss';
import './css/fontello.scss';
import './css/base.scss';
import './css/main.scss';
import './css/timeline.scss';
import './css/custom.scss';

import placeHolder from './img/portfolio/1.jpg';

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
                                        <Skills />
                                        {/*<!-- END SKILLS -->*/}

                                        {/*<!-- START EXPERIENCE -->*/}
                                        <div className="resume-card">
                                            <div className="main-title">
                                                <h1>experience</h1>
                                                <hr />
                                            </div>
                                            <div className="content">
                                                <div className="block-content ">
                                                    <div className="timeline experience">
                                                        <div className="row ">
                                                            <div className="col-md-12">
                                                                <ul className="timeline">
                                                                    <li className="timeline-item">
                                                                        <div className="timeline-info">
                                                                            <span>March 12, 2016</span>
                                                                        </div>
                                                                        <div className="timeline-marker"></div>
                                                                        <div className="timeline-content">
                                                                            <h3 className="timeline-title">Event Title</h3>
                                                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan
                                                                    a, consectetuer eget, posuere ut, mauris. Donec orci
                                                                    lectus, aliquam ut, faucibus non, euismod id, nulla.
                                                                    Donec vitae sapien ut libero venenatis faucibus. ullam
                                                                    dictum felis eu pede mollis pretium. Pellentesque ut
                                                                    neque.
                                                                </p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- END EXPERIENCE -->*/}

                                        {/*<!-- START EDUCATION -->*/}
                                        <div className="resume-card">
                                            <div className="main-title">
                                                <h1>education</h1>
                                                <hr />
                                            </div>
                                            <div className="content">
                                                <div className="block-content">
                                                    <div className="timeline education">
                                                        <div className="row ">
                                                            <div className="col-md-12">
                                                                <ul className="timeline">
                                                                    <li className="timeline-item">
                                                                        <div className="timeline-info">
                                                                            <span>March 12, 2016</span>
                                                                        </div>
                                                                        <div className="timeline-marker"></div>
                                                                        <div className="timeline-content">
                                                                            <h3 className="timeline-title">Event Title</h3>
                                                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan
                                                                    a, consectetuer eget, posuere ut, mauris. Donec orci
                                                                    lectus, aliquam ut, faucibus non, euismod id, nulla.
                                                                    Donec vitae sapien ut libero venenatis faucibus. ullam
                                                                    dictum felis eu pede mollis pretium. Pellentesque ut
                                                                    neque.
                                                                </p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- END EDUCATION -->*/}

                                        {/*<!-- START PORTFOLIO -->*/}
                                        <div className="resume-card">
                                            <div className="main-title">
                                                <h1>my works</h1>
                                                <hr />
                                            </div>

                                            <div className="content">
                                                <div className="block-content ">
                                                    <div className="works">
                                                        <div className="row">
                                                            <ul className="work">
                                                                <li className="col-md-4 ">
                                                                    <div className="item web">
                                                                        <a href="project_single.html">
                                                                            <div className="desc">
                                                                                <h3 className="proj-desc">Project Name
                                                                        <hr />
                                                                                    <span>web design</span></h3>
                                                                            </div>
                                                                            <img alt="" src={placeHolder} />
                                                                        </a>
                                                                    </div>
                                                                </li>
                                                                <li className="col-md-4 ">
                                                                    <div className="item web">
                                                                        <a href="project_single.html">
                                                                            <div className="desc">
                                                                                <h3 className="proj-desc">Project Name
                                                                        <hr />
                                                                                    <span>web design</span></h3>
                                                                            </div>
                                                                            <img alt="" src={placeHolder} />
                                                                        </a>
                                                                    </div>
                                                                </li>
                                                                <li className="col-md-4 ">
                                                                    <div className="item web">
                                                                        <a href="project_single.html">
                                                                            <div className="desc">
                                                                                <h3 className="proj-desc">Project Name
                                                                        <hr />
                                                                                    <span>web design</span></h3>
                                                                            </div>
                                                                            <img alt="" src={placeHolder} />
                                                                        </a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
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
