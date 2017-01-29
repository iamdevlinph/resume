import React, { Component } from 'react';

import './About.scss';

class About extends Component {
    render() {
        return (
            <div className="About">
                <section id="about" className="section section-about">
                    <div className="section__box">
                        <div className="profile">
                            <div className="row">
                                <div className="col s5">
                                    <div className="profile__photo"><img src={require('./img/profile-picture.jpg')} alt="Profile"/></div>
                                </div>
                                <div className="col s7">
                                    <div className="profile__info">
                                        {/*<div className="profile__items clearfix">
                                            <div className="profile__preword"><span>Hello</span></div>
                                        </div> */}
                                        <h1 className="profile__title">
                                            <span>Devlin</span> Pajaron</h1>
                                        <h2 className="profile__position">Full Stack Developer</h2>
                                    </div>
                                    <ul className="profile__list">
                                        <li className="clearfix">
                                            <strong className="title">Age</strong>
                                            <span className="cont">21</span>
                                        </li>
                                        <li className="clearfix">
                                            <strong className="title">Address</strong>
                                            <span className="cont">Cebu City, Philippines</span>
                                        </li>
                                        <li className="clearfix">
                                            <strong className="title">E-mail</strong>
                                            <span className="cont">devlinpajaron@gmail.com</span>
                                        </li>
                                        <li className="clearfix">
                                            <strong className="title">Mobile</strong>
                                            <span className="cont">+63 943 230 2440</span>
                                        </li>
                                        {/*<li className="clearfix">
                                            <strong className="title"><span className="button">Vacation</span></strong>
                                            <span className="cont">
                                                <i className="rsicon rsicon-calendar"></i>till April 15, 2016</span>
                                        </li>*/}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="profile__social">
                            <ul className="social">
                                <li><a href="https://www.twitter.com/" target="_blank"><i className="rsicon rsicon-twitter"></i></a></li>
                                <li><a href="https://www.facebook.com/" target="_blank"><i className="rsicon rsicon-facebook"></i></a></li>
                                <li><a href="https://dribbble.com/" target="_blank"><i className="rsicon rsicon-dribbble"></i></a></li>
                                <li><a href="https://www.linkedin.com/" target="_blank"><i className="rsicon rsicon-linkedin"></i></a></li>
                                <li><a href="https://instagram.com/" target="_blank"><i className="rsicon rsicon-instagram"></i></a></li>
                                <li><a href="https://plus.google.com/" target="_blank"><i className="rsicon rsicon-google-plus"></i></a></li>
                                <li><a href="http://xing.com" target="_blank"><i className="rsicon rsicon-xing"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="section__text">
                        <p>
                            Hello! I'm Devlin Pajaron. A fresh graduate that is off to learn new things.
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;
