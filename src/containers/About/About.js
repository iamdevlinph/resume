import React from 'react';
import styled from 'styled-components';

const AboutGrid = styled.div`
  border: 1px solid black;
  margin: 10px 10px;
`;

const Avatar = styled.div`
  text-align: center;
`;

const NameTitle = styled.div`
  display: block;
`;

const Name = styled.div``;
const Title = styled.div``;
const Info = styled.div``;
const AboutFooter = styled.div``;
const SocialLinks = styled.div``;

class AboutContainer extends React.Component {
  render() {
    return (
      <AboutGrid>
        <Avatar>
          <img src="https://res.cloudinary.com/dfrhytey3/image/upload/v1520350961/icon_jgxnta.jpg" alt="profile" />
        </Avatar>
        <NameTitle>
          <Name>Devlin Pajaron</Name>
          <Title>JavaScript Developer</Title>
        </NameTitle>
        <Info>iamdevlinph@gmail.com</Info>
        <Info>live:devlinpajaron</Info>
        <Info>0945 460 0265</Info>
        <Info>Cebu City, Philippines</Info>
        <AboutFooter>
          <SocialLinks />
        </AboutFooter>
      </AboutGrid>
    );
  }
}

export default AboutContainer;
