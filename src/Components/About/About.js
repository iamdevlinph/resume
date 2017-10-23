import React, { Component } from 'react';
import moment from 'moment';
import * as _ from 'lodash';

import './About.scss';

class About extends Component {
  constructor(props) {
    super(props);
    this.noClick = this.noClick.bind(this);
    this.showPdf = this.showPdf.bind(this);
    this.state = { about: this.props.about };
  }
  noClick(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
  showPdf() {
    window.open('/Devlin Pajaron - Resume.pdf')
  }
  render() {
    let updated_at = moment(this.state.about.updated_at, 'YYYY-MM-DD').format('DD MMMM, YYYY');
    let social_links = _.orderBy(this.state.about.social_links, ['order'], ['asc']).map((val, idx) => {
      let link_el = null;
      if (val.show) {
        link_el = (
          <li key={idx}><a href={val.url} target="_blank"><i className={val.icon} /></a></li>
        )
      }
      return link_el;
    });
    return (
      <div className="about-card">
        <div className="col-md-3 left-col">
          <header id="header">
            <div className="main-header">
              <figure className="img-profile">
                <img src={this.state.about.profile_photo_url} alt="" />
                {/* <figcaption className="name-profile">
                  <span>name <sup>&reg;</sup></span>
                </figcaption> */}
              </figure>
              <nav id="main-nav" className="main-nav clearfix tabbed">
                <ul>
                  <li className="active">
                    <a href="#" className="active" onClick={(e) => this.noClick(e)}>
                      <p className="name">{this.state.about.first_name} <strong>{this.state.about.last_name}</strong></p>
                      <p className="title">JavaScript Developer</p>
                    </a>
                  </li>
                  <li className="about-sub-section">
                    <a href="#" className="about-sub-section__link" onClick={(e) => this.noClick(e)}>
                      {this.state.about.email}<i className="about-sub-section__link__icon icon-mail" />
                    </a>
                  </li>
                  <li className="about-sub-section">
                    <a href={`skype:${this.state.about.skype}?chat`} className="about-sub-section__link">
                      {this.state.about.skype}<i className="about-sub-section__link__icon icon-skype" />
                    </a>
                  </li>
                  <li className="about-sub-section">
                    <a href="#" className="about-sub-section__link" onClick={(e) => this.noClick(e)}>
                      {this.state.about.mobile}<i className="about-sub-section__link__icon icon-phone" />
                    </a>
                  </li>
                  <li className="about-sub-section">
                    <a href="#" className="about-sub-section__link" onClick={(e) => this.noClick(e)}>
                      {this.state.about.address}<i className="about-sub-section__link__icon icon-home" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="bottom-header bgWhite ofsTSmall ofsBSmall tCenter">
              <ul className="social">
                {social_links}
              </ul>
              <p>&copy; 2017 iamdevlinph</p>
              <button className="btn btn-print no-print" onClick={() => this.showPdf()}><i className="icon-download" /> PDF</button>&nbsp;
                            <p className="resume-updated"><em>Updated at {updated_at}</em></p>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default About;
