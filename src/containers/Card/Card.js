import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class CardContainer extends React.Component {
  render() {
    return (
      <CardGrid>
        <CardTitle>{this.props.title}</CardTitle>
        <CardDivider />
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
};

export default CardContainer;

const CardGrid = styled.div`
  background: #fff;
  margin: 10px 10px 20px;
  box-shadow: 0 1px 6px rgba(0,0,0,.12), 0 1px 4px rgba(0,0,0,.24);
  min-height: 380px;
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

const CardDivider = styled.hr`
  border: 0;
  height: 1px;
  background: #b52e31;
  background-image: linear-gradient(90deg,#b52e31,#fff,#fff);
  margin-bottom: 10px;
`;

const CardContent = styled.div`
  margin-top: 20px;
`;
