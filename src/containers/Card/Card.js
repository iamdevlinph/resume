import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardGrid = styled.div`
  border: 1px black solid;
  margin: 10px 10px;
`;

class CardContainer extends React.Component {
  render() {
    return (
      <CardGrid>
        <h1>{this.props.title}</h1>
      </CardGrid>
    );
  }
}

CardContainer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CardContainer;
