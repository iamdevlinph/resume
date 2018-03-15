import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import moment from 'moment';
import * as dateUtils from '../../services/dateUtils';

import { actions as experienceActions } from '../../ducks/experience';
import { Timeline } from '../../components';

class ExperienceContainer extends React.Component {
  componentWillMount() {
    this.props.requestExperience();
    this.state = { experienceToTimeline: [] };
  }
  componentWillReceiveProps(props) {
    // manipulate experience data to match timeline expected data
    const newData = props.experience.map((value) => {
      const dateFrom = moment(value.workFrom, 'MMMM-YYYY').format('MMM YYYY');
      const dateTo = (value.workTo !== 'Present') ?
        moment(value.workTo, 'MMMM-YYYY').format('MMM YYYY') : (<Present />);
      const dateDuration = dateUtils.getDuration(value.workFrom, value.workTo, 'MMMM-YYYY');
      const subContent = (
        <div>
          <SubContentMain>Technologies Used:</SubContentMain>
          <SubContentTag>{value.technologies}</SubContentTag>
        </div>
      );
      const newDataStruct = {
        id: value.id,
        dateFrom,
        dateTo,
        dateDuration,
        title: value.title,
        tagLine: value.company,
        mainContent: value.description,
        subContent,
      };
      return newDataStruct;
    });
    this.setState({ experienceToTimeline: newData });
  }
  render() {
    return (
      <div>
        <Timeline data={this.state.experienceToTimeline} />
      </div>
    );
  }
}

ExperienceContainer.propTypes = {
  requestExperience: PropTypes.func.isRequired,
  experience: PropTypes.any,
};

ExperienceContainer.defaultProps = {
  experience: [],
};

const mapStateToProps = state => (
  {
    experience: state.experience.data,
  }
);

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    ...experienceActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceContainer);

const Present = styled.span`
  &:before {
          color: #B52E31;
  content: 'Present';
}
`;
const SubContentMain = styled.div`
  font-size: 12px;
  font-weight: bold;
`;
const SubContentTag = styled.div`
  font-size: 11px;
`;
