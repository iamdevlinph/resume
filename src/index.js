import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import 'materialize-css/bin/jquery-2.1.1.min.js';
// materialize
// import 'materialize-css/bin/materialize.css';
// import 'materialize-css/bin/materialize.js';
// import 'font-awesome/css/font-awesome.min.css';

// V3 Imports
// import CSS
import './css/bootstrap.scss';
import './css/font.scss';
import './css/fontello.scss';
import './index.scss';
import './css/timeline.scss'; // Experience and Education cards
import './css/balloon.scss'; // tooltip

// import JS
// import './js/jquery-1.11.3.min.js';
// import './js/jquery-migrate-1.2.1.js';
// import './js/modernizr.js';
// import './js/placeholders.min.js';
// import './js/script.js';

// console.log("%cThe layout of this resume is inspired from rscardwp.px-lab.com", "color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;");
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
