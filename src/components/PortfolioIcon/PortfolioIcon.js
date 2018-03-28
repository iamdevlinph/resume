import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class PortfolioIcon extends React.Component {
  render() {
    return (
      <PortfolioIconContainer>
        <PortfolioTitle><span>{this.props.data.name}</span></PortfolioTitle>
        <PortfolioIamage src={this.props.data.img_path} alt={this.props.data.name} />
      </PortfolioIconContainer>
    );
  }
}

PortfolioIcon.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PortfolioIcon;

const PortfolioIconContainer = styled.div`
  overflow: hidden;
  position: relative;
`;
const PortfolioIamage = styled.img`
  max-width: 100%;
  vertical-align: middle;
  margin: auto 0;
`;
const PortfolioTitle = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  height: 100%;
  position: absolute;
  width: 100%;
  background: rgba(181,46,49,.95) none repeat scroll 0 0;
  text-align: center;
  z-index: 2;
  opacity: 0;
  transition: all .3s ease-in-out 0s;
  -ms-transition: all .3s ease-in-out 0s;
  -webkit-transition: all .3s ease-in-out 0s;
  -moz-transition: all .3s ease-in-out 0s;
  -o-transition: all .3s ease-in-out 0s;
  &:hover {
    opacity: 1;
  }
  span {
    font-size: 14px;
    bottom: 0;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    height: 55px;
  }
`;
