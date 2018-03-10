import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as educatioActions } from '../../ducks/education';
// import { Timeline } from '../../components';

class EducationContainer extends React.Component {
  componentWillMount() {
    this.props.requestEducation();
  }
  render() {
    return (
      <div>
        education stuff goes here
        {/* <Timeline /> */}
        {/* <pre>{JSON.stringify(this.props.education, null, 2)}</pre> */}
      </div>
    );
  }
}

EducationContainer.propTypes = {
  requestEducation: PropTypes.func.isRequired,
  // education: PropTypes.any,
};

EducationContainer.defaultProps = {
  // education: [],
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
