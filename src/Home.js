import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestSkills, requestExperience, requestEducation, requestPortfolio, requestAbout } from './actions';

import './main.scss';
import './Home.scss';

import * as dateUtils from './utils/date.util.js';

import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Portfolio from './Components/Portfolio/Portfolio';

class Home extends Component {
  componentWillMount() {
    this.props.requestAbout();
    this.props.requestExperience();
    this.props.requestSkills();
    this.props.requestEducation();
    this.props.requestPortfolio();
  }

  render() {
    return (
      <div className="app">
        <div id="wrapper" className="marg-top marg-bottom">
          <div className="container" id="print-container">
            <div className="row ">

              {/*<!-- START ABOUT -->*/}
              {!this.props.about.isFetching ?
                (<About about={this.props.about.data} />) : null}
              {/*<!-- END ABOUT -->*/}

              {/*<!-- START RESUME -->*/}
              <div className="col-md-9 right-col">
                <section className="offset-bottom">
                  <div className="resume">

                    {/*<!-- START EXPERIENCE -->*/}
                    <div className="resume-card">
                      <div className="experience-card">
                        <div className="main-title">
                          <h1><i className="icon-suitcase" />experience</h1>
                          <hr className="divider--fade" />
                        </div>
                        {!this.props.experience.isFetching ?
                          (<Experience dateUtils={dateUtils}
                            experience={this.props.experience.data} />) : null
                        }
                      </div>
                    </div>
                    {/*<!-- END EXPERIENCE -->*/}

                    {/*<!-- START SKILLS -->*/}
                    <div className="resume-card">
                      <div className="skills-card">
                        <div className="main-title">
                          <h1><i className="icon-code" />technologies</h1>
                          <hr className="divider--fade" />
                        </div>
                        {!this.props.skills.isFetching ?
                          (<Skills dateUtils={dateUtils}
                            skills={this.props.skills.data} />) : null
                        }
                      </div>
                    </div>
                    {/*<!-- END SKILLS -->*/}

                    {/*<!-- START EDUCATION -->*/}
                    <div className="resume-card">
                      <div className="education-card">
                        <div className="main-title">
                          <h1><i className="icon-graduation-cap" />education</h1>
                          <hr className="divider--fade" />
                        </div>
                        {!this.props.education.isFetching ?
                          (<Education education={this.props.education.data} />) : null
                        }
                      </div>
                    </div>
                    {/*<!-- END EDUCATION -->*/}

                    {/*<!-- START PORTFOLIO -->*/}
                    <div className="resume-card">
                      <div className="education-card">
                        <div className="main-title">
                          <h1><i className="icon-folder-open" />portfolio</h1>
                          <hr className="divider--fade" />
                        </div>
                        {!this.props.portfolio.isFetching ?
                          (<Portfolio portfolio={this.props.portfolio.data} />) : null
                        }
                      </div>
                    </div>
                    {/*<!-- END PORTFOLIO -->*/}
                  </div>
                </section>
              </div>
              {/*<!-- END RESUME -->*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    about: {
      data: state.about.data,
      isFetching: state.about.isFetching
    },
    skills: {
      data: state.skills.data,
      isFetching: state.skills.isFetching
    },
    experience: {
      data: state.experience.data,
      isFetching: state.experience.isFetching
    },
    education: {
      data: state.education.data,
      isFetching: state.education.isFetching
    },
    portfolio: {
      data: state.portfolio.data,
      isFetching: state.portfolio.isFetching
    }
  }
);

const mapDispatchToProps = dispatch => bindActionCreators(
  { requestAbout, requestSkills, requestExperience, requestEducation, requestPortfolio }, dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
