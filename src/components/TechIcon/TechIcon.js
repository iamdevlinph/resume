import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class TechIconComponent extends React.Component {
  render() {
    return (
      <TechIcon>
        <TechImageContainer>
          <TechImage src={this.props.tech.img_path} alt="" />
        </TechImageContainer>
        <TechName>{this.props.tech.name}</TechName>
      </TechIcon>
    );
  }
}

TechIconComponent.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechIconComponent;

const TechIcon = styled.div`
  text-align: center;
  /* border: 1px dashed red; */
`;

const TechImageContainer = styled.div`
  height: 70px;
  position: relative;
`;

const TechImage = styled.img`
  max-height: 60%;
  max-width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const TechName = styled.div`
  /* border: 1px dashed black; */
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
`;
