import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as experienceActions } from '../../ducks/experience';

class ExperienceContainer extends React.Component {
  componentWillMount() {
    this.props.requestExperience();
  }
  render() {
    return (
      <div>
        experience stuff goes here
      </div>
    );
  }
}

ExperienceContainer.propTypes = {
  requestExperience: PropTypes.func.isRequired,
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
