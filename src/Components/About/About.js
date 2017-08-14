import React, { Component } from 'react';

import './About.scss';

import profileImg from './img/ai_resize.jpg';

import * as printUtils from '../../utils/print.util.js';

class About extends Component {
    constructor() {
        super();
        this.noClick = this.noClick.bind(this);
        this.print = this.print.bind(this);
        this.showPdf = this.showPdf.bind(this);
    }
    noClick(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
    print() {
        // will not be used for now
        printUtils.print();
    }
    showPdf() {
        window.open('/resume/Devlin Pajaron - Resume.pdf')
    }
    render() {
        return (
            <div className="about-card">
                <div className="col-md-3 left-col">
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
                                        <a href="#" className="about-sub-section__link" onClick={(e) => this.noClick(e)}>
                                            iamdevlinph@gmail.com
                                            <i className="about-sub-section__link__icon icon-mail" />
                                        </a>
                                    </li>
                                    <li className="about-sub-section">
                                        <a href="skype:live:devlinpajaron?chat" className="about-sub-section__link">
                                            live:devlinpajaron
                                            <i className="about-sub-section__link__icon icon-skype" />
                                        </a>
                                    </li>
                                    <li className="about-sub-section">
                                        <a href="#" className="about-sub-section__link" onClick={(e) => this.noClick(e)}>
                                            (+63) 943 230 2440
                                            <i className="about-sub-section__link__icon icon-phone" />
                                        </a>
                                    </li>
                                    <li className="about-sub-section">
                                        <a href="#" className="about-sub-section__link" onClick={(e) => this.noClick(e)}>
                                            Cebu City, Philippines
                                            <i className="about-sub-section__link__icon icon-home" />
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="bottom-header bgWhite ofsTSmall ofsBSmall tCenter">
                            <ul className="social">
                                {/*<li><a href="https://www.facebook.com/iamdevlinph" target="_blank"><i className="icon-facebook"></i></a></li>*/}
                                <li><a href="https://github.com/iamdevlinph" target="_blank"><i className="icon-github-circled"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/iamdevlinph/" target="_blank"><i className="icon-linkedin"></i></a></li>
                                {/*<li><a href="skype:live:devlinpajaron?chat"><i className="icon-skype"></i></a></li>*/}
                                <li><a href="http://stackoverflow.com/users/4620773/iamdevlinph" target="_blank"><i className="icon-stack-overflow"></i></a></li>
                                <li><a href="https://twitter.com/iamdevlinph" target="_blank"><i className="icon-twitter"></i></a></li>
                            </ul>
                            <p>&copy; 2017 iamdevlinph</p>
                            <button className="btn btn-print no-print" onClick={() => this.showPdf()}><i className="icon-download"/> PDF</button>&nbsp;
                            <p className="resume-updated"><em>Updated at 06 August, 2017</em></p>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}

export default About;
