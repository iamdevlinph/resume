import React, { Component } from 'react';

import './Education.scss';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = { educationData: this.props.education };
  }
  render() {
    let educationList = this.state.educationData.map((education, index) => {
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
    );
  }
}

export default Education;
