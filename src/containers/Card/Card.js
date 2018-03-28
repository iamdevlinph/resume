import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Divider } from '../../components';

class CardContainer extends React.Component {
  render() {
    return (
      <CardGrid>
        <CardTitle><CardIcon className={this.props.icon} />{this.props.title}</CardTitle>
        <Divider />
        <CardContent>
          {this.props.children}
        </CardContent>
      </CardGrid>
    );
  }
}

CardContainer.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default CardContainer;

const CardGrid = styled.div`
  background: #fff;
  margin: 10px 10px 20px;
  box-shadow: 0 1px 6px rgba(0,0,0,.12), 0 1px 4px rgba(0,0,0,.24);
  min-height: 200px;
  overflow: hidden;
  padding: 30px 40px 20px;
`;
const CardTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 15px;
  display: block;
`;
const CardContent = styled.div`
  margin-top: 20px;
`;
const CardIcon = styled.i`
  font-size: 25px;
  padding-right: 10px;
`;
