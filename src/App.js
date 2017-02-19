import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.scss';

import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="wrapper">
                    <Navbar />
                    <Content />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
