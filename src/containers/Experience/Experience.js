import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as experienceActions } from '../../ducks/experience';
import { Timeline } from '../../components';

class ExperienceContainer extends React.Component {
  componentWillMount() {
    this.props.requestExperience();
  }
  render() {
    return (
      <div>
        <Timeline />
        <pre>
          {/* {JSON.stringify(this.props.experience, null, 2)} */}
        </pre>
      </div>
    );
  }
}

ExperienceContainer.propTypes = {
  requestExperience: PropTypes.func.isRequired,
  // experience: PropTypes.any,
};

ExperienceContainer.defaultProps = {
  // experience: [],
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
