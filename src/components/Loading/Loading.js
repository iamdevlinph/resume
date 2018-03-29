import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoadingComponent = (props) => {
  if (props.isLoading) {
    return <Loader />;
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

const Loader = styled.div`
  display: inline-block;
  height: 50%;
  width: 100%;
  /* https://codepen.io/P1N2O/pen/pyBNzX */
  min-height: 200px;
  color: #fff;
  background: linear-gradient(-45deg, #FFF, #F5F5F5, #d2d1d1, #d2d1d1, #F5F5F5, #FFF);
  background-size: 400% 400%;
  -webkit-animation: Gradient 10s ease infinite;
  -moz-animation: Gradient 10s ease infinite;
  animation: Gradient 10s ease infinite;
  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

`;
