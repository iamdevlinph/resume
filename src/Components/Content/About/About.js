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
                                    <div className="profile-photo"><img src="http://rscardwp.px-lab.com/wp-content/uploads/2015/11/robert_WP-1-299x347.jpg" alt="" /></div>
                                </div>
                                <div className="col s7">
                                    <div className="profile-info">
                                        <div className="profile-items clearfix">
                                            <div className="profile-preword"><span>Hello</span></div>

                                        </div>
                                        <h1 className="profile-title">
                                            <span>I'm</span> Robert Smith </h1>
                                        <h2 className="profile-position">Developer and Startup entrepreneur</h2>
                                    </div>
                                    <ul className="profile-list">
                                        <li className="clearfix">
                                            <strong className="title">Age</strong>
                                            <span className="cont">29</span>
                                        </li>
                                        <li className="clearfix">
                                            <strong className="title">Address</strong>
                                            <span className="cont">24058, Belgium, Brussels, Liutte 27, BE</span>
                                        </li>
                                        <li className="clearfix">
                                            <strong className="title">E-mail</strong>
                                            <span className="cont">robertsmith@company.com</span>
                                        </li>
                                        <li className="clearfix">
                                            <strong className="title">Phone</strong>
                                            <span className="cont">+1 256 254 84 56</span>
                                        </li>
                                        <li className="clearfix">
                                            <strong className="title">Freelance</strong>
                                            <span className="cont">till March 25, 2016</span>
                                        </li>
                                        <li className="clearfix">
                                            <strong className="title"><span className="button">Vacation</span></strong>
                                            <span className="cont">
                                                <i className="rsicon rsicon-calendar"></i>till April 15, 2016</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="profile-social">
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
                        <p>Hello! I’m Robert Smith. Senior Web Developer specializing in front end development. Experienced
                                with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming
                                languages including JavaScript, SQL, and C. Stng background in project management and customer relations.</p>

                    </div>
                </section>
            </div>
        );
    }
}

export default About;
