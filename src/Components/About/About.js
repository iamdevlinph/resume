import React, { Component } from 'react';

import './About.scss';

import profileImg from './img/ai.jpg';

class About extends Component {
    constructor() {
        super();
        this.noClick = this.noClick.bind(this);
    }
    noClick(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
    render() {
        return (
            <div className="about-card">
                <div className="col-md-3 left-content">
                    <header id="header">
                        <div className="main-header">
                            <figure className="img-profile">
                                <img src={profileImg} alt="" />
                                {/*<!--<figcaption className="name-profile">
							        <span>Carlose smith <sup>&reg;</sup></span>
						        </figcaption>-->*/}
                            </figure>
                            <nav id="main-nav" className="main-nav clearfix tabbed">
                                <ul>
                                    <li className="active">
                                        <a href="#" className="active" onClick={(e) => this.noClick(e)}>
                                            <p className="name">Devlin <strong>Pajaron</strong></p>
                                            <p className="title">JavaScript Developer</p>
                                        </a>
                                    </li>
                                    <li className="about-sub-section">
                                        <a href="#" className="" onClick={(e) => this.noClick(e)}>
                                            iamdevlinph@gmail.com
                                        </a>
                                    </li>
                                    <li className="about-sub-section">
                                        <a href="#" className="" onClick={(e) => this.noClick(e)}>
                                            (+63) 943 230 2440
                                        </a>
                                    </li>
                                    <li className="about-sub-section">
                                        <a href="#" className="" onClick={(e) => this.noClick(e)}>
                                            Cebu City, Philippines
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="bottom-header bgWhite ofsTSmall ofsBSmall tCenter">
                            <ul className="social">
                                <li><a href="https://www.facebook.com/iamdevlinph" target="_blank"><i className="icon-facebook"></i></a></li>
                                <li><a href="https://github.com/iamdevlinph" target="_blank"><i className="icon-github-circled"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/iamdevlinph/" target="_blank"><i className="icon-linkedin"></i></a></li>
                            </ul>
                            <p>&copy; 2017 iamdevlinph</p>
                            <p className="resume-updated"><em>Updated at 3 May, 2017</em></p>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}

export default About;
