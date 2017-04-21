import React, { Component } from 'react';

import './Portfolio.scss';

import placeHolder from './img/1.jpg';

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio-card">
                <div className="main-title">
                    <h1><i className="icon-folder-open" />portfolio</h1>
                    <hr className="divider--fade"/>
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
        );
    }
}

export default Portfolio;
