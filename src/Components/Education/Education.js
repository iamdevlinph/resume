import React, { Component } from 'react';

import './Education.scss';

import educationJson from './data/education.json';

class Education extends Component {
    constructor() {
        super();
        this.state = { educationData: educationJson };
    }
    // componentDidMount() {
    //     fetch('./data/experience.json')
    //         .then((data) => {
    //             return data.json();
    //         })
    //         .then((data) => {
    //             this.setState({ educationData: data });
    //         });
    // }
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
                        {
                            education.degree ? 
                            <h3 className="timeline-title">{education.school}<br/>{education.degree}</h3> : 
                            <h3 className="timeline-title">{education.school}</h3>
                        }
                        <p></p>
                    </div>
                </li>
            );
        });
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
