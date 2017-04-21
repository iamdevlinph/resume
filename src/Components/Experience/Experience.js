import React, { Component } from 'react';
import moment from 'moment';

import './Experience.scss';

import experienceJson from './data/experience.json';

class Experience extends Component {
    constructor() {
        super();
        this.state = { experienceData: experienceJson};
    }
    // componentDidMount() {
    //     fetch('./data/experience.json')
    //         .then((data) => {
    //             return data.json();
    //         })
    //         .then((data) => {
    //             this.setState({ experienceData: data });
    //         });
    // }
    render() {
        var experienceList = this.state.experienceData.map((experience, index) => {
            var workFrom = moment(experience.workFrom, 'DD-MMMM-YYYY').format('DD MMMM, YYYY');
            var workTo = (experience.workTo === 'Present') ? 
                'Present' :
                moment(experience.workTo, 'DD-MMMM-YYYY').format('DD MMMM, YYYY');
            return (
                <li key={index} className="timeline-item">
                    <div className="timeline-info">
                        <span>{workFrom}</span>
                        <span> - </span>
                        <span className={workTo === 'Present' ? 'present-work' : ''}>{workTo}</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">
                            <span className="experience-role">{experience.title}</span><br/>
                            <a className="experience-company" href={experience.company_website} target="_blank">{experience.company}</a>
                        </h3>
                        <p className="experience-body">{experience.description}</p>
                        <div className="experience-footer">
                            <span>Technologies Used:</span>
                            <span>{experience.technologies}</span>
                        </div>
                    </div>
                </li>
            );
        });
        return (
            <div className="experience-card">
                <div className="main-title">
                    <h1><i className="icon-suitcase" />experience</h1>
                    <hr className="divider--fade"/>
                </div>
                <div className="content">
                    <div className="block-content ">
                        <div className="timeline experience">
                            <div className="row ">
                                <div className="col-md-12">
                                    <ul className="timeline">
                                        {experienceList}
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
