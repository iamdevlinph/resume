import React, { Component } from 'react';

import './Skills.scss';

import LoaderOverlay from '../../Widgets/LoaderOverlay/LoaderOverlay';

class Skills extends Component {
    constructor() {
        super();
        this.state = { skillsData: [], fetchingOngoing: true };
    }
    componentDidMount() {
        fetch(`https://private-0b7e9-iamdevlinph.apiary-mock.com/skills`).then(function (data) {
            return data.json();
        }).then((data) => {
            this.setState({ skillsData: data });
            this.setState({ fetchingOngoing: false });
        });
    }
    render() {
        var skillList = this.state.skillsData.map(function (skill, index) {
            return (
                <li key={index}>
                    <div className="skills__logo">
                        <img src={skill.img_base64} alt="Skill" />
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
