import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { actions as portfolioActions } from '../../ducks/portfolio';
import { PortfolioIcon } from '../../components';

class PortfolioContainer extends React.Component {
  constructor() {
    super();
    this.state = { portfolioList: [] };
  }
  componentWillMount() {
    this.props.requestPortfolio();
  }
  componentWillReceiveProps(props) {
    const portfolioList = props.portfolio.map((value) => {
      let el = null;
      if (value.isShow) {
        el = <PortfolioIcon data={value} key={value.name} />;
      }
      return el;
    });
    this.setState({
      portfolioList,
    });
  }
  render() {
    return (
      <PortfolioGridList>
        {this.state.portfolioList}
      </PortfolioGridList>
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

const PortfolioGridList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: space-between;
  grid-row-gap: 20px;
`;
