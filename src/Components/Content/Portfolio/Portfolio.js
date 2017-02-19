import React, { Component } from 'react';

import './Portfolio.scss';

class Portfolio extends Component {
    render() {
        var portfolioList = require('./data/portfolio.json').map(function (portfolio, index) {
            return (
                <li key={index} className="tile">
                    <div className="portfolio__container">
                        {/*<img src={require(portfolio.img_path)} alt="Portfolio" />*/}
                        <img src={portfolio.img_base64} alt="Portfolio" />
                        <div className="overlay">
                            <div className="text">
                                <a href={portfolio.url} target="_blank">
                                    {portfolio.name}
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            );
        });
        return (
            <div className="portfolio">
                <section id="portfolio" className="section">
                    <div className="section__title">
                        Portfolio
                    </div>
                    <div className="section__box">
                        <div className="section__content">
                            <ul className="portfolio__list">
                                {portfolioList}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;
