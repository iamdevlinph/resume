import React from 'react';
import styled from 'styled-components';

import { About, Experience, Technology, Education, Portfolio } from '../../loadableCons';

class ResumeContainer extends React.Component {
  render() {
    return (
      <ResumeGrid>
        <FixedContent>
          <About />
        </FixedContent>
        <ScrollableContent>
          <Experience />
          <Technology />
          <Education />
          <Portfolio />
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
