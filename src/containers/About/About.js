import React from 'react';
import styled from 'styled-components';

const AboutGrid = styled.div`
  border: 1px solid black;
  margin: 10px 10px;
`;

class AboutContainer extends React.Component {
  render() {
    return (
      <AboutGrid>
        <h1>About Container</h1>
      </AboutGrid>
    );
  }
}

export default AboutContainer;
