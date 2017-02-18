import React, { Component } from 'react';

import './Skills.scss';

class Skills extends Component {
    render() {
        return (
            <div className="Skills">
                <section id="skills" className="section">
                    <div className="section__title">
                        Skills
                    </div>
                    <div className="section__box">
                        <div className="section__content">
                            <ul className="skill__list">
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/AngularJS.jpg')} alt="Skill"/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>AngularJS</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/CI.jpg')} alt="Skill"/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>CodeIgniter</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/CSS.jpg')} alt="Skill"/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>CSS</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/GIT.jpg')} alt="Skill"/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>GIT</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/HTML.jpg')} alt="Skill"/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>HTML</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/Java.jpg')} alt="Skill"/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>Java</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/jQuery.jpg')} alt="Skill"/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>jQuery</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/JS.jpg')} alt="Skill"/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>JavaScript</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/Laravel.jpg')} alt="Skill"/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>Laravel</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/MYSQL.jpg')} alt="Skill"/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>MySQL</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/PHP.jpg')} alt="Skill"/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>PHP</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/PS.jpg')} alt="Skill"/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>Photoshop</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/sass.jpg')} alt="Skill"/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>SASS</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/WP.jpg')} alt="Skill"/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>WordPress</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;
