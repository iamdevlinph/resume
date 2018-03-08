import React from 'react';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

import Routes from './routes';
import store from './store';

export default () => (
  <Provider store={store} >
    <Routes />
  </Provider>
);

// Global style
// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    background: #F5F5F5;
    font-family:"open_sans", Arial, sans-serif;
  }
`;
