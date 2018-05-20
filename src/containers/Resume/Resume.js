import React from 'react';
import styled from 'styled-components';

import { AboutCard, ExperienceCard, TechnologyCard, EducationCard, PortfolioCard } from '../index';

class ResumeContainer extends React.Component {
  render() {
    return (
      <ResumeGrid>
        <FixedContent>
          <AboutCard />
        </FixedContent>
        <ScrollableContent>
          <ExperienceCard />
          <TechnologyCard />
          <EducationCard />
          <PortfolioCard />
        </ScrollableContent>
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
const ScrollableContent = styled.div`
  margin-top: 10px;
  @media only screen and (min-width: 600px) {
    height: 98vh;
    overflow-y: scroll;
  }
`;
const FixedContent = styled.div`
  margin: 10px;
`;
