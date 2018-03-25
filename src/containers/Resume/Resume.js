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
          <Card title="Experience" icon="icon-suitcase"><ExperienceCard /></Card>
          <Card title="Technology" icon="icon-code"><TechnologyCard /></Card>
          <Card title="Education" icon="icon-graduation-cap"><EducationCard /></Card>
          <Card title="Portfolio" icon="icon-folder-open"><PortfolioCard /></Card>
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
