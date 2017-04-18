import React, { Component } from 'react';

import './Education.scss';

import LoaderOverlay from '../../Widgets/LoaderOverlay/LoaderOverlay';

class Education extends Component {
    constructor() {
        super();
        this.state = { educationData: [], fetchingOngoing: true };
    }
    componentDidMount() {
        fetch(`https://raw.githubusercontent.com/iamdevlinph/resume/dev/src/Components/Content/Education/data/education.json`)
            .then(function (data) {
                return data.json();
            }).then((data) => {
                this.setState({ educationData: data });
                this.setState({ portfolioData: data });
                this.setState({ fetchingOngoing: false });
            });
    }
    render() {
        var educationList = this.state.educationData.map(function (education, index) {
            return (
                <li key={index} className={(index % 2 !== 0) ? "timeline-inverted" : ""}>
                    <div className="timeline-badge">
                        <a><i className="fa fa-circle" id=""></i></a>
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <div className="duration">{education.duration}</div>
                            <div className="school"><img src={education.school_logo} alt="School" /></div>
                            <div className="title">{education.school}</div>
                            {education.level === 'Tertiary' && <div className="degree">{education.degree}</div>}
                        </div>
                    </div>
                </li>
            );
        });
        return (
            <div className="education">
                <section id="education" className="section">
                    <div className="section__title">
                        Education
                    </div>
                    <div className="section__box">
                        <div className="section__content">
                            {
                                this.state.fetchingOngoing ?
                                    (<LoaderOverlay />)
                                    : <ul className="timeline hidden">
                                        {educationList}
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

export default Education;
