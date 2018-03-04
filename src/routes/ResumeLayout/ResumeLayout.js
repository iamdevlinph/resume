import React from 'react';
import PropTypes from 'prop-types';

import './resume-layout.css';

class HomeLayout extends React.Component {
  render() {
    return (
      <div className="resume-layout">
        {this.props.children}
      </div>
    );
  }
}

HomeLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default HomeLayout;
