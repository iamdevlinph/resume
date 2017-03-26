import React, { Component } from 'react';

import './Contact.scss';

class Contact extends Component {
    constructor() {
        super();
        this.onContactSend = this.handleContactSubmit.bind(this);
    }
    handleContactSubmit() {
        alert('This feature is not yet available');
    }
    render() {
        return (
            <div className="contact">
                <section id="contact" className="section">
                    <div className="section__title">
                        Contact
                    </div>
                    <div className="section__box">
                        <div className="section__content">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix fa fa-user" />
                                        <input id="last_name" type="text" className="validate" required disabled/>
                                        <label htmlFor="last_name">Name</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix fa fa-envelope" />
                                        <input id="last_name" type="email" className="validate" required disabled/>
                                        <label htmlFor="last_name">Email</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix fa fa-phone" />
                                        <input id="last_name" type="number" className="validate" required disabled/>
                                        <label htmlFor="last_name">Phone Number</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix fa fa-pencil" />
                                        <textarea id="icon_prefix2" className="materialize-textarea" required disabled></textarea>
                                        <label htmlFor="icon_prefix2">Message</label>
                                    </div>
                                    <div className="col s12 contact__send-button">
                                        <center>
                                            <a className="waves-effect waves-light btn red darken-1" onClick={() => this.onContactSend()}>
                                                <i className="material-icons left fa fa-paper-plane" />
                                                send
                                            </a>
                                        </center>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;
