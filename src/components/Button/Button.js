import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 2px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

class ButtonComponent extends React.Component {
  render() {
    return (
      <Button onClick={this.props.onClick}>{this.props.label}</Button>
    );
  }
}

ButtonComponent.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonComponent;
