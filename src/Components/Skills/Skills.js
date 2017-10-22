import React, { Component } from 'react';
import moment from 'moment';
import * as _ from 'lodash';

import './Skills.scss';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = { skillsData: this.props.skills };
  }
  render() {
    const dateUtils = this.props.dateUtils;
    let skillList = _.orderBy(this.state.skillsData, [skill => skill.name.toLowerCase()], ['asc']).map((skill, index) => {
      let el = null;
      let duration = '';
      if (skill.duration.showDuration) {
        let fromDate = moment(skill.duration.usedFrom, 'DD-MMMM-YYYY').format('MMM YYYY');
        let toDate = (skill.duration.usedTo !== 'Present') ? moment(skill.duration.usedTo, 'DD-MMMM-YYYY').format('MMM YYYY') : skill.duration.usedTo;
        let dates = fromDate + ' - ' + toDate;
        duration = dates + '\n' + dateUtils.getDuration(skill.duration.usedFrom, skill.duration.usedTo, 'DD-MMMM-YYYY');
      } else {
        duration = skill.duration.hideDurationText;
      }
      // let skillName = (skill.long_name) ? skill.long_name : skill.name;
      // let tooltip = skillName + '\n';
      let tooltip = duration;
      if (skill.showSkill) {
        el = (
          <li key={index} data-balloon={tooltip} data-balloon-pos="down" data-balloon-break>
            <div className="skills__logo">
              <img src={skill.img_path} alt={skill.name} />
            </div>
            <div className="skills__name">
              <h4>{skill.name}</h4>
            </div>
          </li>
        )
      }

      return el;
    });
    // add 7 empty elements
    for (let x = 0; x < 7; x++) {
      let key = "empty-" + x;
      skillList.push(
        <li className="empty" key={key}>
        </li>
      );
    }
    return (
      <div className="content">
        <ul className="skills__list">
          {skillList}
        </ul>
      </div>
    );
  }
}

export default Skills;
