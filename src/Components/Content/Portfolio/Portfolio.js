import React, { Component } from 'react';

import './Portfolio.scss';

import LoaderOverlay from '../../Widgets/LoaderOverlay/LoaderOverlay';

class Portfolio extends Component {
    constructor() {
        super();
        this.state = { portfolioData: [], fetchingOngoing: true };
    }
    componentDidMount() {
        fetch(`https://rawgit.com/iamdevlinph/resume/dev/src/Components/Content/Portfolio/data/portfolio.json`)
            .then(function (data) {
                return data.json();
            }).then((data) => {
                this.setState({ portfolioData: data });
                this.setState({ fetchingOngoing: false });
            });
    }
    render() {
        var portfolioList = this.state.portfolioData.map(function (portfolio, index) {
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
                            {
                                this.state.fetchingOngoing ?
                                    (<LoaderOverlay />)
                                    : <ul className="portfolio__list hidden">
                                        {portfolioList}
                                    </ul>
                            }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;
