import React, { Component } from 'react';

import './Portfolio.scss';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { portfolioData: this.props.portfolio };

    // meta
    //1545x771 px
  }
  render() {
    let portfolioList = this.state.portfolioData.map((portfolio, index) => {
      let el = null;
      if (portfolio.isShow) {
        el = (
          <li key={index} className="col-md-4 ">
            <div className="item web">
              <a href={portfolio.url} target="_blank">
                <div className="desc no-print">
                  <h3 className="proj-desc">
                    {portfolio.name}
                    {/*<hr />
                     <span>web design</span>*/}
                  </h3>
                </div>
                <img className="portfolio-preview" alt="" src={portfolio.img_path} />
                <span className="show-to-print">
                  {portfolio.name}
                </span>
              </a>
            </div>
          </li>
        );
      }

      return el;
    });
    return (
      <div className="content">
        <div className="block-content ">
          <div className="works">
            <div className="row">
              <ul className="work">
                {portfolioList}
              </ul>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
