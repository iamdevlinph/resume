import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { actions as aboutActions } from '../../ducks/about';

class AboutContainer extends React.Component {
  componentWillMount() {
    this.props.requestAbout();
  }
  render() {
    return (
      <AboutGrid>
        <AvatarSection>
          {/* <Avatar src={this.props.about.profile_photo_url} alt="profile" /> */}
          <Avatar src="https://res.cloudinary.com/dfrhytey3/image/upload/v1520350961/icon_jgxnta.jpg" alt="profile" />
        </AvatarSection>
        <NameTitle>
          <Name>{this.props.about.first_name}
            <LastName>{this.props.about.last_name}</LastName>
          </Name>
          <Title>{this.props.about.role}</Title>
        </NameTitle>
        <Info>{this.props.about.email}</Info>
        <Info>{this.props.about.skype}</Info>
        <Info>{this.props.about.mobile}</Info>
        <Info>{this.props.about.address}</Info>
        <AboutFooter>
          <SocialLinks />
        </AboutFooter>
        Updated at {this.props.about.updated_at}
      </AboutGrid>
    );
  }
}

AboutContainer.propTypes = {
  requestAbout: PropTypes.func.isRequired,
  about: PropTypes.object,
};

AboutContainer.defaultProps = {
  about: {},
};

const mapStateToProps = state => (
  {
    about: state.about.data,
  }
);

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    ...aboutActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);

const AboutGrid = styled.div`
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.12),0 1.5px 1px 0 rgba(0,0,0,.24) !important;
  margin: 10px 10px;
  background: white;
  text-align: right;
`;

const AvatarSection = styled.div`
  text-align: center;
`;

const Avatar = styled.img`
  display: inline-block;
  vertical-align: middle;
  height: auto;
  max-width: 100%;
`;

const NameTitle = styled.div`
  background: #B52E31;
  color: white;
  text-transform: uppercase;
  padding: 15px 25px;
`;

const Name = styled.div`
  font-size: 20px;
`;
const LastName = styled.span`
  margin-left: 5px;
  color: #333131;
`;
const Title = styled.span`
  font-size: 10px;
`;
const Info = styled.div`
  background: #33373D;
  color: #85878B;
  padding: 7px 25px;
  font-size: 12px;
  border-bottom: 1px solid #26292e;
`;
const AboutFooter = styled.div``;
const SocialLinks = styled.div``;
