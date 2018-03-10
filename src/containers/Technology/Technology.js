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
        <pre>
          {JSON.stringify(this.props.technology, null, 2)}
        </pre>
      </div>
    );
  }
}

TechnologyContainer.propTypes = {
  requestTechnology: PropTypes.func.isRequired,
  technology: PropTypes.any,
};

TechnologyContainer.defaultProps = {
  technology: [],
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
