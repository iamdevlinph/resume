import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Navbar } from '../../components';

const Layout = styled.div`
  display: inherit;
  text-align: center;
`;

class HomeLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar />
        {this.props.children}
      </Layout>
    );
  }
}

HomeLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default HomeLayout;
