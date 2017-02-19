import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.scss';

import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="wrapper">
                    <Navbar />
                    <Content />
                </div>
            </div>
        );
    }
}

export default App;
