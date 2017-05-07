import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import CSS
import './css/bootstrap.scss';
import './css/font.scss';
import './css/fontello.scss';
import './index.scss';
import './css/timeline.scss'; // Experience and Education cards
import './css/balloon.scss'; // tooltip

// import JS
import './js/jspdf.js';

// custom console.log
// console.log("%cEnter message here", "color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;");
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
