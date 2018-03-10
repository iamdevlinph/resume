import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as portfolioActions } from '../../ducks/portfolio';

class PortfolioContainer extends React.Component {
  componentWillMount() {
    this.props.requestPortfolio();
  }
  render() {
    return (
      <div>
        portfolio stuff goes here
        <pre>
          {JSON.stringify(this.props.portfolio, null, 2)}
        </pre>
      </div>
    );
  }
}

PortfolioContainer.propTypes = {
  requestPortfolio: PropTypes.func.isRequired,
  portfolio: PropTypes.any,
};

PortfolioContainer.defaultProps = {
  portfolio: [],
};

const mapStateToProps = state => (
  {
    portfolio: state.portfolio.data,
  }
);

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    ...portfolioActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);
