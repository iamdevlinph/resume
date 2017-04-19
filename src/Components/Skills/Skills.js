import React, { Component } from 'react';

import './Skills.scss';

class Skills extends Component {
    render() {
        return (
            <div className="skills-card">
                <div className="resume-card">
                    <div className="main-title">
                        <h1>skills</h1>
                        <hr />
                    </div>
                    <div className="content">
                        <div className="block-content ">
                            <div className="services">
                                <div className="row ">
                                    <div className="block service tCenter">
                                        <div className="col-md-4">
                                            <div className="ico">
                                                <i className="icon-lifebuoy"></i>
                                            </div>
                                            <div className="det">
                                                <h3>Great Support</h3>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                                accusantium.
                                                            </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="ico">
                                                <i className="icon-print-1"></i>
                                            </div>
                                            <div className="det">
                                                <h3>Print &amp; Branding</h3>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                                accusantium.
                                                            </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="ico">
                                                <i className="icon-megaphone"></i>
                                            </div>
                                            <div className="det">
                                                <h3>Marketing</h3>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                                accusantium.
                                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
