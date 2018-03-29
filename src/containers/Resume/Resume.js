import React from 'react';
import styled from 'styled-components';

import { Card } from '../index';

import { About, Experience, Technology, Education, Portfolio } from '../../loadableCons';

class ResumeContainer extends React.Component {
  render() {
    return (
      <ResumeGrid>
        <FixedContent>
          <About />
        </FixedContent>
        <ScrollableContent>
          <Card title="Experience" icon="icon-suitcase"><Experience /></Card>
          <Card title="Technology" icon="icon-code"><Technology /></Card>
          <Card title="Education" icon="icon-graduation-cap"><Education /></Card>
          <Card title="Portfolio" icon="icon-folder-open"><Portfolio /></Card>
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
  @media only screen and (min-width: 600px) {
    height: 98vh;
    overflow-y: scroll;
  }
`;
const FixedContent = styled.div`
  margin: 10px;
`;
