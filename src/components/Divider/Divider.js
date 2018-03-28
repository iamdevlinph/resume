import React from 'react';
import styled from 'styled-components';

class DividerComponent extends React.Component {
  render() {
    return (
      <CardDivider />
    );
  }
}

export default DividerComponent;

const CardDivider = styled.hr`
  border: 0;
  height: 1px;
  background: #b52e31;
  background-image: linear-gradient(90deg,#b52e31,#fff,#fff);
  margin-bottom: 10px;
`;
