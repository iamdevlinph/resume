import React, { Component } from 'react';
import moment from 'moment';

import './Skills.scss';

import skillsJson from './data/skills.json';

class Skills extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = { skillsData: skillsJson };
  }
  render() {
    console.log(this.props)
    const dateUtils = this.props.dateUtils;
    var skillList = this.state.skillsData.map((skill, index) => {
      var el = null;
      var duration = '';
      if (skill.duration.showDuration) {
        var fromDate = moment(skill.duration.usedFrom, 'DD-MMMM-YYYY').format('MMM YYYY');
        var toDate = (skill.duration.usedTo !== 'Present') ? moment(skill.duration.usedTo, 'DD-MMMM-YYYY').format('MMM YYYY') : skill.duration.usedTo;
        var dates = fromDate + ' - ' + toDate;
        duration = dates + '\n' + dateUtils.getDuration(skill.duration.usedFrom, skill.duration.usedTo, 'DD-MMMM-YYYY');
      } else {
        duration = skill.duration.hideDurationText;
      }
      // var skillName = (skill.long_name) ? skill.long_name : skill.name;
      // var tooltip = skillName + '\n';
      var tooltip = duration;
      if (skill.showSkill) {
        el = (
          <li key={index} data-balloon={tooltip} data-balloon-pos="down" data-balloon-break>
            <div className="skills__logo">
              <img src={require(skill.img_path)} alt={skill.name} />
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
    for (var x = 0; x < 7; x++) {
      var key = "empty-" + x;
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
        {/*<div className="block-content ">
                        <div className="services">
                            <div className="row ">
                                <div className="block service tCenter">
                                    <div className="col-md-4">
                                        <div className="ico">
                                            <i className="icon-lifebuoy"></i>
                                        </div>
                                        <div className="det">
                                            <h3>Great Support</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                                accusantium.
                                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="ico">
                                            <i className="icon-print-1"></i>
                                        </div>
                                        <div className="det">
                                            <h3>Print &amp; Branding</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                                accusantium.
                                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="ico">
                                            <i className="icon-megaphone"></i>
                                        </div>
                                        <div className="det">
                                            <h3>Marketing</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                                accusantium.
                                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>*/}
      </div>
    );
  }
}

export default Skills;
