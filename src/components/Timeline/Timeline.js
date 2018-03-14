import React from 'react';
import styled from 'styled-components';
// import moment from 'moment';

class TimelineComponent extends React.Component {
  render() {
    return (
      <Timeline>
        <Item>
          <Marker>
            <Period />
            <Line />
          </Marker>
          <Event>
            <Date>Jan 1970 - <Present /> <Duration>(1 YEAR, 8 MONTHS)</Duration></Date>
            <Title>Front-End Developer</Title>
            <Company>AsiaInspection - Cebu City, Philippines, Full-Time</Company>
            <Content>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit fuga </p>
            </Content>
          </Event>
        </Item>
      </Timeline>
    );
  }
}

export default TimelineComponent;

const Timeline = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Item = styled.li`
  display: grid;
  grid-template-areas: "timeline-marker timeline-event";
  grid-template-columns: 25px auto;
  margin-bottom: 10px;
  grid-column-gap: 20px;
`;
const Marker = styled.div`
  display: grid;
  grid-template-areas:
    "timeline-period"
    "timeline-line";
  grid-template-rows: 25px auto;
`;
const Period = styled.div`
  grid-area: timeline-period;
  -moz-border-radius: 50px/50px;
  -webkit-border-radius: 50px 50px;
  border-radius: 50px/50px;
  border: solid 3px #FF6B6B;
  width: 40%;
  height: 40%;
  margin: auto;
`;
const Line = styled.div`
  grid-area: timeline-line;
  border-left: 3px solid #CCD5DB;
  height: 100%;
  margin: auto;
`;
const Event = styled.div`
  /* grid-area: timeline-event; */
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0 0 .5em;
  text-transform: uppercase;
  white-space: nowrap;
`;
const Duration = styled.span`
  font-family: open_sanssemibold;
  font-style: italic;
  font-size: 10px;
`;
const Present = styled.span`
  &:before {
    color: #B52E31;
    content: 'Present';
  }
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`;
const Company = styled.div``;
const Content = styled.div``;
