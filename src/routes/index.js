import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import ResumeLayout from './ResumeLayout/ResumeLayout';
import loadableCons from './loadableCons';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

export default () => (
  <BrowserRouter >
    <Switch>
      <AppRoute exact path="/" layout={ResumeLayout} component={loadableCons.Resume} />
    </Switch>
  </BrowserRouter >
);

AppRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired,
};
