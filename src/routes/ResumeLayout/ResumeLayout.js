import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ResumeLayoutGrid = styled.div`
  display: grid;
  grid-template-areas: "l-pad main-area r-pad";
  grid-template-columns: auto 1200px auto;
  @media only screen and (max-width: 1200px) and (min-width: 600px) {
    grid-template-columns: 0px auto 0px;
  }
  @media only screen and (max-width: 599px) {
    grid-template-areas: "main-area";
    grid-template-columns: auto;
  }
`;

class ResumeLayout extends React.Component {
  render() {
    return (
      <ResumeLayoutGrid>
        {this.props.children}
      </ResumeLayoutGrid>
    );
  }
}

ResumeLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ResumeLayout;
