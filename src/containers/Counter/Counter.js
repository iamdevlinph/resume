import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { Button, Input } from '../../components';

import { actions as counterActions } from '../../ducks/counter';

const Container = styled.div`
  display: inherit;
`;

class CounterContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0,
    };
    this.customValChange = this.customValChange.bind(this);
    this.customValReset = this.customValReset.bind(this);
  }
  customValChange(e) {
    this.setState({ val: +e.target.value });
  }
  customValReset() {
    this.setState({ val: 0 });
  }
  render() {
    return (
      <Container>
        <h1>{this.props.total}</h1>
        <Button label="Increase" onClick={() => this.props.counterIncrease(this.state.val)} />
        <Button label="Decrease" onClick={() => this.props.counterDecrease(this.state.val)} />
        <Button label="Reset" onClick={this.props.counterReset} />
        <p>Input custom number to increase or decrease the total</p>
        <Input type="number" value={this.state.val} onChange={this.customValChange} min={0} />
        <br />
        <Button label="Reset Custom Value" onClick={this.customValReset} />
      </Container>
    );
  }
}

CounterContainer.propTypes = {
  total: PropTypes.number.isRequired,
  counterIncrease: PropTypes.func.isRequired,
  counterDecrease: PropTypes.func.isRequired,
  counterReset: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    total: state.counter.total,
  }
);

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    ...counterActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
