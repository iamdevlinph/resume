import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ResumeGridLayout = styled.div`
  display: grid;
  grid-template-areas: "l-pad main-area r-pad";
  grid-template-columns: auto 1200px auto;
`;

class ResumeLayout extends React.Component {
  render() {
    return (
      <ResumeGridLayout>
        {this.props.children}
      </ResumeGridLayout>
    );
  }
}

ResumeLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ResumeLayout;
