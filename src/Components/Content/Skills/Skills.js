import React, { Component } from 'react';

import './Skills.scss';

class Skills extends Component {
    render() {
        var skillList = require('./data/skills.json').map(function(skill, index) {
            return (
                <li key={index}>
                    <div className="skill__logo">
                        <img src={require(skill.img_path)} alt="Skill"/>
                    </div>
                    <div className="skill__name">
                        <h4>{skill.name}</h4>
                    </div>
                </li>
            );
        });
        return (
            <div className="Skills">
                <section id="skills" className="section">
                    <div className="section__title">
                        Skills
                    </div>
                    <div className="section__box">
                        <div className="section__content">
                            <ul className="skill__list">
                                {skillList}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;
