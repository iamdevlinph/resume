import React from 'react';
import styled from 'styled-components';

import { AboutCard, Card } from '../index';

const ResumeGrid = styled.div`
  display: grid;
  grid-area: main-area;
  grid-template-columns: 270px auto;
  grid-column-gap: 20px;
  @media only screen and (max-width: 599px) {
    grid-template-columns: auto;
    grid-row-gap: 20px;
  }
`;

class ResumeContainer extends React.Component {
  render() {
    return (
      <ResumeGrid>
        <div>
          <AboutCard />
        </div>
        <div>
          <Card title="Experience Container" />
          <Card title="Technology Container" />
          <Card title="Education Container" />
          <Card title="Portfolio Container" />
        </div>
      </ResumeGrid>
    );
  }
}

export default ResumeContainer;
