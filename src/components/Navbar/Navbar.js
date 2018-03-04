import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Divider = styled.li`
  margin: 0px 5px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0px;
  display: inline-flex;
`;

class NavbarComponent extends React.Component {
  render() {
    return (
      <div>
        <List>
          <li><Link to="/">Home</Link></li>
          <Divider>|</Divider>
          <li><Link to="about">About</Link></li>
        </List>
      </div>
    );
  }
}

export default NavbarComponent;
