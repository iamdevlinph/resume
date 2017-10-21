import React from 'react';
import { Provider } from 'react-redux';
import 'babel-polyfill';

import store from './store';
import Home from './Home';

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

store.subscribe(() => {
  console.log(store.getState()); // Some DOM api calls.
});
