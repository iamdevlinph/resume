import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as educatioActions } from '../../sagaDucks/education/education';
import { Timeline } from '../../components';
import { Card } from '../index';

class EducationContainer extends React.Component {
  constructor() {
    super();
    this.state = { educationToTimeline: [] };
  }
  componentWillMount() {
    this.props.requestEducation();
  }
  componentWillReceiveProps(props) {
    const newData = props.education.map((value) => {
      const newDataStruct = {
        id: value.school,
        dateFrom: value.studyFrom,
        dateTo: value.studyTo,
        title: value.degree,
        tagLine: value.school,
      };

      return newDataStruct;
    });
    this.setState({ educationToTimeline: newData });
  }
  render() {
    return (
      <Card title="Education" icon="icon-graduation-cap">
        <Timeline data={this.state.educationToTimeline} />
      </Card>
    );
  }
}

EducationContainer.propTypes = {
  requestEducation: PropTypes.func.isRequired,
  education: PropTypes.any,
};

EducationContainer.defaultProps = {
  education: [],
};

const mapStateToProps = state => (
  {
    education: state.education.data,
  }
);

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    ...educatioActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EducationContainer);
