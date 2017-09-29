import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestSkills } from './actions';

import './main.scss';
import './Home.scss';

import * as dateUtils from './utils/date.util.js';

import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Portfolio from './Components/Portfolio/Portfolio';

class Home extends Component {
  componentDidMount() {
    this.props.requestSkills();
  }

  render() {
    return (
      <div className="app">
        {this.props.resume}
        <div id="wrapper" className="marg-top marg-bottom">
          <div className="container" id="print-container">
            <div className="row ">

              {/*<!-- START ABOUT -->*/}
              <About />
              {/*<!-- END ABOUT -->*/}

              {/*<!-- START RESUME -->*/}
              <div className="col-md-9 right-col">
                <section className="offset-bottom">
                  <div className="resume">
                    {/*<!-- START EXPERIENCE -->*/}
                    <div className="resume-card">
                      <Experience dateUtils={dateUtils} />
                    </div>

                    {/*<!-- END EXPERIENCE -->*/}

                    {/*<!-- START SKILLS -->*/}
                    <div className="resume-card">
                      <div className="skills-card">
                        <div className="main-title">
                          <h1><i className="icon-code" />technologies</h1>
                          <hr className="divider--fade" />
                        </div>
                        {this.props.resume.isFetching ?
                          (<Skills dateUtils={dateUtils}
                            skills={this.props.resume.skills} />) : null
                        }
                      </div>
                    </div>
                    {/*<!-- END SKILLS -->*/}

                    {/*<!-- START EDUCATION -->*/}
                    <div className="resume-card">
                      <Education />
                    </div>
                    {/*<!-- END EDUCATION -->*/}

                    {/*<!-- START PORTFOLIO -->*/}
                    <div className="resume-card">
                      <Portfolio />
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
    resume: state.resume
  }
);
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    requestSkills
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
