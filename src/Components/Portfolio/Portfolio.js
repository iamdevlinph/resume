import React, { Component } from 'react';

import './Portfolio.scss';

import portfolioJson from './data/portfolio.json';

class Portfolio extends Component {
    constructor() {
        super();
        this.state = { portfolioData: portfolioJson };

        // meta
        //1545x771 px
    }
    render() {
        var portfolioList = this.state.portfolioData.map((portfolio, index) => {
            var el = null;
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
                                <img class="portfolio-preview" alt="" src={require(portfolio.img_path)} />
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
            <div className="portfolio-card">
                <div className="main-title">
                    <h1><i className="icon-folder-open" />portfolio</h1>
                    <hr className="divider--fade" />
                </div>

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
            </div>
        );
    }
}

export default Portfolio;
