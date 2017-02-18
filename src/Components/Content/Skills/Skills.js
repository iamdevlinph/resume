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
                                        <img src={require('./img/AngularJS.jpg')}/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>AngularJS</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/CI.jpg')}/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>CodeIgniter</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/CSS.jpg')}/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>CSS</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/GIT.jpg')}/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>GIT</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/HTML.jpg')}/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>HTML</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/Java.jpg')}/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>Java</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/jQuery.jpg')}/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>jQuery</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/JS.jpg')}/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>JavaScript</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/Laravel.jpg')}/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>Laravel</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/MYSQL.jpg')}/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>MySQL</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/PHP.jpg')}/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>PHP</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/PS.jpg')}/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>Photoshop</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/sass.jpg')}/>
                                    </div>
                                    <div className="skill__name">
                                        <h4>SASS</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill__logo">
                                        <img src={require('./img/WP.jpg')}/>
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
