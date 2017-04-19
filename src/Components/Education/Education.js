import React, { Component } from 'react';

import './Education.scss';

class Education extends Component {
    render() {
        return (
            <div className="educaiton-card">
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
        );
    }
}

export default Education;
