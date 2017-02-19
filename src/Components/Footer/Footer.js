import React, { Component } from 'react';

import './Footer.scss';

class Footer extends Component {
    constructor() {
        super();
        this.state = { quoteContent: '' };
        this.state = { quoteAuthor: '' };
        this.state = { quoteCategory: '' };
    }
    componentDidMount() {
        fetch(`https://andruxnet-random-famous-quotes.p.mashape.com/?cat=`, {
            method: 'POST',
            headers: {
                "X-Mashape-Key": "iu7GuzpEwvmshlpsn0dCOvXGRJcbp1UGwp2jsnREdI5r4Oqw65",
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }).then(function (data) {
            return data.json();
        }).then((data) => {
            this.setState({ quoteContent: data.quote });
            this.setState({ quoteAuthor: data.author });
            this.setState({ quoteCategory: data.category });
        });
    }
    render() {
        // var quote = this.state.quoteData.map(function(quote) {
        //     console.log(quote);
        // });
        return (
            <div className="footer">
                <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col l12 s12">
                                <h5 className="white-text">{this.state.quoteContent}</h5>
                                <p className="grey-text text-lighten-4">- {this.state.quoteAuthor} {this.state.quoteCategory === 'Movies' ? '(' + this.state.quoteCategory + ')' : ''}</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2017 <a className="copyright-text" href="https://github.com/iamdevlinph" target="_blank">iamDevlinPH</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
