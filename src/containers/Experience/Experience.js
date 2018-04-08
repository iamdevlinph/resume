import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import moment from 'moment';
import * as dateUtils from '../../services/dateUtils';

import { actions as experienceActions } from '../../ducks/experience';
import { Timeline } from '../../components';
import { Card } from '../index';

class ExperienceContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      experienceToTimeline: [],
      toggleAll: false,
    };
  }
  componentWillMount() {
    this.props.requestExperience();
  }
  componentWillReceiveProps(props) {
    this.generate(props, this.state.toggleAll);
  }
  generate = (props, toggleAll) => {
    // manipulate experience data to match timeline expected data
    const newData = props.experience.reduce((newArr, obj, idx) => {
      const dateFrom = moment(obj.workFrom, 'MMMM-YYYY').format('MMM YYYY');
      const dateTo = (obj.workTo !== 'Present') ?
        moment(obj.workTo, 'MMMM-YYYY').format('MMM YYYY') : (<Present />);
      const dateDuration = dateUtils.getDuration(obj.workFrom, obj.workTo, 'MMMM-YYYY');
      const subContent = (
        <div>
          <SubContentMain>Technologies Used:</SubContentMain>
          <SubContentTag>{obj.technologies}</SubContentTag>
        </div>
      );
      const newDataStruct = {
        id: obj.id,
        dateFrom,
        dateTo,
        dateDuration,
        title: obj.title,
        tagLine: obj.company,
        tagLineLink: obj.company_website,
        mainContent: obj.description,
        subContent,
      };

      if (toggleAll || idx < 1) {
        newArr.push(newDataStruct);
      }

      return newArr;
    }, []);
    this.setState({ experienceToTimeline: newData });
  }
  toggleAll = () => {
    this.setState(
      { toggleAll: !this.state.toggleAll },
      () => this.generate(this.props, this.state.toggleAll),
    );
  }
  render() {
    return (
      <Card title="Experience" icon="icon-suitcase" showMore onClick={() => this.toggleAll()} isMoreShown={this.state.toggleAll}>
        <Timeline data={this.state.experienceToTimeline} />
      </Card>
    );
  }
}

ExperienceContainer.propTypes = {
  requestExperience: PropTypes.func.isRequired,
};

ExperienceContainer.defaultProps = {
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
