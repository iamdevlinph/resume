import React from 'react';
import PropTypes from 'prop-types';

class InputComponent extends React.Component {
  render() {
    return (
      <input
        type={this.props.type}
        value={this.props.value}
        onChange={this.props.onChange}
        min={this.props.min}
      />
    );
  }
}

InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputComponent;
