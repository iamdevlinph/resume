import React, { Component } from 'react';

import './Skills.scss';

import SkillToolTip from '../Widgets/SkillToolTip/SkillToolTip';

import skillsJson from './data/skills.json';

class Skills extends Component {
    constructor() {
        super();
        this.state = { skillsData: skillsJson };
    }
    render() {
        var skillList = this.state.skillsData.map((skill, index) => {
            var el = null;
            if (skill.showSkill) {
                el = (
                    <li key={index}>
                        <SkillToolTip duration={skill.duration}
                            image={skill.img_base64}
                            name={skill.name}
                            show={skill.showDuration} />
                    </li>
                )
            }

            return el;
        });
        return (
            <div className="skills-card">
                <div className="main-title">
                    <h1><i className="icon-code" /> skills</h1>
                    <hr className="divider--fade"/>
                </div>
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
            </div>
        );
    }
}

export default Skills;
