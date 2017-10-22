import React, { Component } from 'react';
import moment from 'moment';

import './Experience.scss';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = { experienceData: this.props.experience };
  }
  render() {
    const dateUtils = this.props.dateUtils;
    let experienceList = this.state.experienceData.map((experience, index) => {
      let workFrom = moment(experience.workFrom, 'MMMM-YYYY').format('MMMM YYYY');
      let workTo = (experience.workTo === 'Present') ?
        'Present' :
        moment(experience.workTo, 'MMMM-YYYY').format('MMMM YYYY');
      let workDuration = dateUtils.getDuration(workFrom, workTo, 'MMMM YYYY');
      return (
        <li key={index} className="timeline-item">
          <div className="timeline-info">
            <span className="emphasis-hover">{workFrom}</span>
            <span> - </span>
            <span className={workTo === 'Present' ? 'present-work' : 'emphasis-hover'}>{workTo}</span> <span className="emphasis-hover work-duration">({workDuration})</span>
          </div>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3 className="timeline-title">
              <span className="experience-role">{experience.title}</span><br />
              <a className="experience-company" href={experience.company_website} target="_blank">{experience.company}</a>
              <span className="experience-company__address"><i className="icon-building" />{experience.address}</span>
              <span className="experience-company__contract"><i className="icon-user" />{experience.contract}</span>
            </h3>
            <p className="emphasis-hover experience-body">{experience.description}</p>
            <div className="experience-footer">
              <span>Technologies Used:</span>
              <span className="emphasis-hover">{experience.technologies}</span>
            </div>
          </div>
        </li>
      );
    });
    return (
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
    );
  }
}

export default Experience;
