import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionGrid = styled.div`
  border: 1px black solid;
  margin: 10px 10px;
`;

class SectionContainer extends React.Component {
  render() {
    return (
      <SectionGrid>
        <h1>{this.props.title}</h1>
      </SectionGrid>
    );
  }
}

SectionContainer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionContainer;
