import React, { Component } from 'react';

import './Skills.scss';

import LoaderOverlay from '../../Widgets/LoaderOverlay/LoaderOverlay';
import SkillToolTip from '../../Widgets/SkillToolTip/SkillToolTip';

class Skills extends Component {
    constructor() {
        super();
        this.state = { skillsData: [], fetchingOngoing: true };
    }
    componentDidMount() {
        var data = require('./data/skills.json');
        this.setState({ skillsData: data });
        this.setState({ fetchingOngoing: false });
    }
    render() {
        var skillList = this.state.skillsData.map(function (skill, index) {
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
            <div className="skills">
                <section id="skills" className="section">
                    <div className="section__title">
                        Skills
                    </div>
                    <div className="section__box">
                        <div className="section__content">
                            {
                                this.state.fetchingOngoing ?
                                    (<LoaderOverlay />)
                                    : <ul className="skills__list">
                                        {skillList}
                                    </ul>
                            }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;
