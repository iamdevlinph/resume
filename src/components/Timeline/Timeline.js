import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class TimelineComponent extends React.Component {
  constructor() {
    super();
    this.state = { events: [] };
  }
  /**
   *
   * @param {number} id for key
   * @param {*} dateFrom
   * @param {*} dateTo
   * @param {*} [dateDuration]
   * @param {*} title
   * @param {*} tagLine
   * @param {*} mainContent
   * @param {*} subContent custom component
   */
  componentWillReceiveProps(props) {
    const events = props.data.map((value) => {
      let el = null;
      el = (
        <Item key={value.id}>
          <Marker>
            <Period />
            <Line />
          </Marker>
          <Event>
            <Date>{value.dateFrom} - {value.dateTo}
              {value.dateDuration ? <Duration> ({value.dateDuration})</Duration> : null}
            </Date>
            <Title>{value.title}</Title>
            <TagLine>{value.tagLine}</TagLine>
            <Content>
              <MainContent>{value.mainContent}</MainContent>
              {value.subContent}
            </Content>
          </Event>
        </Item>
      );

      return el;
    });
    this.setState({ events });
  }
  render() {
    return (
      <Timeline>
        {this.state.events}
      </Timeline>
    );
  }
}

TimelineComponent.propTypes = {
  data: PropTypes.any.isRequired,
};

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
  font-style: italic;
  font-size: 10px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: .5em;
`;
const TagLine = styled.div`
  font-size: 14px;
  text-transform: uppercase;
`;
const Content = styled.div`
  font-size: 14px;
`;
const MainContent = styled.p`
  line-height: 22px;
  margin: 10px 0;
`;
