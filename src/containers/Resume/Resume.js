import React from 'react';
import styled from 'styled-components';

import { AboutCard, Card, EducationCard, ExperienceCard, PortfolioCard, TechnologyCard } from '../index';

class ResumeContainer extends React.Component {
  render() {
    return (
      <ResumeGrid>
        <div>
          <AboutCard />
        </div>
        <div>
          <Card title="Experience"><ExperienceCard /></Card>
          <Card title="Technology"><TechnologyCard /></Card>
          <Card title="Education"><EducationCard /></Card>
          <Card title="Portfolio"><PortfolioCard /></Card>
        </div>
      </ResumeGrid>
    );
  }
}

export default ResumeContainer;

const ResumeGrid = styled.div`
  display: grid;
  grid-area: main-area;
  grid-template-columns: 270px auto;
  grid-column-gap: 10px;
  @media only screen and (max-width: 599px) {
    grid-template-columns: auto;
  }
`;
