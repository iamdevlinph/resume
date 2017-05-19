import React, { Component } from 'react';

import './Education.scss';

import educationJson from './data/education.json';

class Education extends Component {
    constructor() {
        super();
        this.state = { educationData: educationJson };
    }
    render() {
        var educationList = this.state.educationData.map((education, index) => {
            return (
                <li key={index} className="timeline-item">
                    <div className="timeline-info">
                        <span>{education.studyFrom}</span>
                        <span> - </span>
                        <span>{education.studyTo}</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">
                            {education.degree ? (<p className="education-degree">{education.degree}</p>) : null}
                            <span>{education.school}</span>
                        </h3>
                        <p></p>
                    </div>
                </li>
            );
        });
        return (
            <div className="education-card">
                <div className="main-title">
                    <h1><i className="icon-graduation-cap" />education</h1>
                    <hr className="divider--fade"/>
                </div>
                <div className="content">
                    <div className="block-content">
                        <div className="timeline education">
                            <div className="row ">
                                <div className="col-md-12">
                                    <ul className="timeline">
                                        {educationList}
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
