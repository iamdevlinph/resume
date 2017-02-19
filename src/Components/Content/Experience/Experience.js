import React, { Component } from 'react';

import './Experience.scss';

class Experience extends Component {
    render() {
        var experienceList = require('./data/experience.json').map(function(experience, index) {
            return (
                <li key={index} className={(index % 2 !== 0) ? "timeline-inverted":""}>
                    <div className="timeline-badge">
                    <a><i className="fa fa-circle" id=""></i></a>
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <div className="duration">{experience.duration}</div>
                            <div className="company"><img src={require(experience.company_img)} alt="Company"/></div>
                            <div className="title">{experience.title}</div>
                        </div>
                        <div className="timeline-body">
                            <p>{experience.description}</p>
                        </div>
                        <div className="timeline-footer">
                            <p className="text-right">Technologies</p>
                            <p className="technologies">{experience.technologies}</p>
                        </div>
                    </div>
                </li>
            );
        });
        return (
            <div className="Experience">
                <section id="experience" className="section">
                    <div className="section__title">
                        Experience
                    </div>
                    <div className="section__box">
                        <div className="section__content">
                            <ul className="timeline">
                                {experienceList}
                                <li className="clearfix no-float"></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Experience;
