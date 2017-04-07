import React, { Component } from 'react';

import './About.scss';

import LoaderOverlay from '../../Widgets/LoaderOverlay/LoaderOverlay';

class About extends Component {
    constructor() {
        super();
        this.state = {
            profileData: [],
            profilePicture: '',
            profileMessage: '',
            fetchingOngoing: true
        };
    }
    componentDidMount() {
        fetch(`https://private-0b7e9-iamdevlinph.apiary-mock.com/about`).then(function (data) {
            return data.json();
        }).then((data) => {
            this.setState({ profileData: data.profile_data });
            this.setState({ profilePicture: data.profile_picture });
            this.setState({ profileMessage: data.profile_message });
            this.setState({ fetchingOngoing: false });
        });
    }
    render() {
        var aboutList = this.state.profileData.map(function (about, index) {
            var el = null;
            if (about.show) {
                el = (
                    <li key={index} className="clearfix">
                        <strong className="title">{about.label}</strong>
                        <span className="cont">{about.value}</span>
                    </li>
                );

            }

            return el;
        });
        return (
            <div className="about">
                <section id="about" className="section section-about">
                    <div className="section__box">
                        <div className="section__content profile">
                            {
                                this.state.fetchingOngoing ?
                                    (<LoaderOverlay />)
                                    : <div className="row">
                                        <div className="col s5">
                                            {/*<div className="profile__photo"><img src={require('./img/profile-picture.jpg')} alt="Profile" /></div>*/}
                                            <div className="profile__photo"><img src={this.state.profilePicture} alt="Profile" /></div>
                                        </div>
                                        <div className="col s7">
                                            <div className="profile__info">
                                                {/*<div className="profile__items clearfix">
                                            <div className="profile__preword"><span>Hello</span></div>
                                        </div> */}
                                                <h1 className="profile__title">
                                                    <span>Devlin</span> PAJARON</h1>
                                                <h2 className="profile__position">JavaScript Developer</h2>
                                            </div>
                                            <ul className="profile__list">
                                                {aboutList}
                                            </ul>
                                        </div>
                                    </div>
                            }
                        </div>
                        <div className="profile__social">
                            <ul className="social">
                                {/*<li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>*/}
                                <li><a href="https://www.facebook.com/akodevlin" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://ph.linkedin.com/in/devlin-pajaron-53414a118" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="https://github.com/iamdevlinph" target="_blank"><i className="fa fa-github"></i></a></li>
                                {/*<li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-google-plus"></i></a></li>*/}
                            </ul>
                        </div>
                    </div>

                    <div className="section__text">
                        <p>
                            {this.state.profileMessage}
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;
