import React, { Component } from 'react';

import './About.scss';

import profileImg from './img/profile.jpg';

class About extends Component {
    render() {
        return (
            <div className="about-card">
                <div className="col-md-3 nopr left-content">
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
                                        <a href="#" className="active">
                                            <p className="name">Devlin <strong>Pajaron</strong></p>
                                            <p className="title">JavaScript Developer</p>
                                        </a>
                                    </li>
                                    <li className="about-sub-section">
                                        <a href="#" className="">
                                            iamdevlinph@gmail.com
                                        </a>
                                    </li>
                                    <li className="about-sub-section">
                                        <a href="#" className="">
                                            (+63) 943 230 2440
                                        </a>
                                    </li>
                                    <li className="about-sub-section">
                                        <a href="#" className="">
                                            Cebu City, Philippines
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="bottom-header bgWhite ofsTSmall ofsBSmall tCenter">
                            <ul className="social">
                                <li><a href="#"><i className="icon-facebook"></i></a></li>
                                <li><a href="#"><i className="icon-twitter"></i></a></li>
                                <li><a href="#"><i className="icon-linkedin"></i></a></li>
                            </ul>
                            <p>&copy; 2017 iamdevlinph</p>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}

export default About;
