import React, { Component } from 'react';

import './Experience.scss';

import LoaderOverlay from '../../Widgets/LoaderOverlay/LoaderOverlay';

class Experience extends Component {
    constructor() {
        super();
        this.state = { experienceData: [], fetchingOngoing: true };
    }
    componentDidMount() {
        fetch(`https://private-0b7e9-iamdevlinph.apiary-mock.com/experience`).then(function (data) {
            return data.json();
        }).then((data) => {
            this.setState({ experienceData: data });
            this.setState({ fetchingOngoing: false });
        });
    }
    render() {
        var experienceList = this.state.experienceData.map(function (experience, index) {
            return (
                <li key={index} className={(index % 2 !== 0) ? "timeline-inverted" : ""}>
                    <div className="timeline-badge">
                        <a><i className="fa fa-circle" id=""></i></a>
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <div className="duration">{experience.duration}</div>
                            <div className="company"><img src={experience.company_img_base64} alt="Company" /></div>
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
            <div className="experience">
                <section id="experience" className="section">
                    <div className="section__title">
                        Experience
                    </div>
                    <div className="section__box">
                        <div className="section__content">
                            {
                                this.state.fetchingOngoing ?
                                    (<LoaderOverlay />)
                                    : <ul className="timeline hidden">
                                        {experienceList}
                                        <li className="clearfix no-float"></li>
                                    </ul>
                            }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Experience;
