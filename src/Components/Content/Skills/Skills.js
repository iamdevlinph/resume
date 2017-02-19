import React, { Component } from 'react';

import './Skills.scss';

class Skills extends Component {
    constructor() {
        super();
        this.state = { skillsData: [] };
    }
    componentDidMount() {
        fetch(`https://private-0b7e9-iamdevlinph.apiary-mock.com/skills`).then(function (data) {
            return data.json();
        }).then( (data) => {
            this.setState({ skillsData: data });
        });
    }
    render() {
        var skillList = this.state.skillsData.map(function(skill, index) {
            return (
                <li key={index}>
                    <div className="skills__logo">
                        <img src={skill.img_base64} alt="Skill"/>
                    </div>
                    <div className="skills__name">
                        <h4>{skill.name}</h4>
                    </div>
                </li>
            );
        });
        return (
            <div className="skills">
                <section id="skills" className="section">
                    <div className="section__title">
                        Skills
                    </div>
                    <div className="section__box">
                        <div className="section__content">
                            <ul className="skills__list">
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
