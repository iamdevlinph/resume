import React from 'react';
import PropTypes from 'prop-types';

const LoadingComponent = (props) => {
  if (props.isLoading) {
    return <div>Loading...</div>;
  } else if (props.error) {
    return <div>Something went wrong...</div>;
  } else if (props.timedOut) {
    return <div>Request timed out... </div>;
  }
  return null;
};

LoadingComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  timedOut: PropTypes.bool.isRequired,
};

LoadingComponent.defaultProps = {
  error: null,
};

export default LoadingComponent;
