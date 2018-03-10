import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as technologyActions } from '../../ducks/technology';

class TechnologyContainer extends React.Component {
  componentWillMount() {
    this.props.requestTechnology();
  }
  render() {
    return (
      <div>
        technology stuff goes here
      </div>
    );
  }
}

TechnologyContainer.propTypes = {
  requestTechnology: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    technology: state.technology.data,
  }
);

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    ...technologyActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TechnologyContainer);
