import React, { Component } from 'react';

import './Experience.scss';

class Experience extends Component {
    render() {
        return (
            <div className="experience-card">
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
                                                <span> - </span>
                                                <span>Present</span>
                                            </div>
                                            <div className="timeline-marker"></div>
                                            <div className="timeline-content">
                                                <h3 className="timeline-title">Event Title</h3>
                                                <p className="experience-body">Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan
                                                    a, consectetuer eget, posuere ut, mauris. Donec orci
                                                    lectus, aliquam ut, faucibus non, euismod id, nulla.
                                                    Donec vitae sapien ut libero venenatis faucibus. ullam
                                                    dictum felis eu pede mollis pretium. Pellentesque ut
                                                    neque.
                                                </p>
                                                <div className="experience-footer">
                                                    <span>Technologies Used:</span>
                                                    <span>A, B, C, D, E, F, G</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-item">
                                            <div className="timeline-info">
                                                <span>March 12, 2016</span>
                                            </div>
                                            <div className="timeline-marker"></div>
                                            <div className="timeline-content">
                                                <h3 className="timeline-title">Event Title</h3>
                                                <p className="experience-body">Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan
                                                    a, consectetuer eget, posuere ut, mauris. Donec orci
                                                    lectus, aliquam ut, faucibus non, euismod id, nulla.
                                                    Donec vitae sapien ut libero venenatis faucibus. ullam
                                                    dictum felis eu pede mollis pretium. Pellentesque ut
                                                    neque.
                                                </p>
                                                <div className="experience-footer">
                                                    <span>Technologies Used:</span>
                                                    <span>A, B, C, D, E, F, G</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;
