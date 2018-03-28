import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class ButtonComponent extends React.Component {
  render() {
    return (
      <Button>{this.props.children}</Button>
    );
  }
}

ButtonComponent.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ButtonComponent;

const Button = styled.button`
  /* Button General Style */
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  margin: 10px 2px;

  /* Button Specific Style */
  font-size: 10px;
  padding: 4px 10px;
  margin-bottom: 5px;
  background-color: #b52e31;
  color: #fff;
`;
