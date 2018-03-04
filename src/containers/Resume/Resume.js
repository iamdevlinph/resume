import React from 'react';
import styled from 'styled-components';

import { About, Education, Experience, Portfolio, Skills } from '../index';
import './resume-grid.css';

const ResumeGrid = styled.div`
  display: grid;
  grid-area: main-area;
  grid-template-columns: 280px auto;
  grid-column-gap: 10px;
`;

class ResumeContainer extends React.Component {
  render() {
    return (
      <ResumeGrid>
        <div className="left-content">
          <About />
        </div>
        <div className="right-content">
          <Education />
          <Experience />
          <Portfolio />
          <Skills />
        </div>
      </ResumeGrid>
    );
  }
}

export default ResumeContainer;
