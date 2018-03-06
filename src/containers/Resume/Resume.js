import React from 'react';
import styled from 'styled-components';

import { About, Section } from '../index';

const ResumeGrid = styled.div`
  display: grid;
  grid-area: main-area;
  grid-template-columns: 280px auto;
  grid-column-gap: 20px;
  @media only screen and (max-width: 599px) {
    grid-template-columns: auto;
    grid-row-gap: 20px;
  }
`;

const Border = styled.div`
  border: 1px solid black;
`;

class ResumeContainer extends React.Component {
  render() {
    return (
      <ResumeGrid>
        <Border>
          <About />
        </Border>
        <Border>
          <Section title="Experience Container" />
          <Section title="Technology Container" />
          <Section title="Education Container" />
          <Section title="Portfolio Container" />
        </Border>
      </ResumeGrid>
    );
  }
}

export default ResumeContainer;
