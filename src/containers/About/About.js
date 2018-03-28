import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import moment from 'moment';
import _ from 'lodash';

import { actions as aboutActions } from '../../ducks/about';

import { Button, IconLink } from '../../components';

class AboutContainer extends React.Component {
  constructor() {
    super();
    this.state = { socialLinks: [] };
  }
  componentWillMount() {
    this.props.requestAbout();
  }
  componentWillReceiveProps(props) {
    const socialLinks = _.orderBy(props.about.social_links, ['order'], ['asc']).map((value) => {
      let el = null;
      if (value.show) {
        el = (
          <li key={value.name}><IconLink href={value.url} icon={value.icon} /></li>
        );
      }
      return el;
    });
    this.setState({ socialLinks });
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
        <Info>{this.props.about.email}<InfoIcon className="icon-mail" /></Info>
        <Info>{this.props.about.skype}<InfoIcon className="icon-skype" /></Info>
        <Info>{this.props.about.mobile}<InfoIcon className="icon-phone" /></Info>
        <Info>{this.props.about.address}<InfoIcon className="icon-home" /></Info>
        <AboutFooter>
          <SocialLinks>
            {this.state.socialLinks}
          </SocialLinks>

          <Button><i className="icon-download" /> PDF</Button>
          <Button><i className="icon-download" /> DOC</Button>
          <FooterTag>Updated at {moment(this.props.about.updated_at, 'YYYY-MM-DD').format('DD MMM, YYYY')}</FooterTag>
          <FooterTag>© 2018 iamdevlinph</FooterTag>
        </AboutFooter>
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
  vertical-align: middle;
  height: auto;
  /* remove when using the smiley avatar */
  /* width: 100%; */
`;
const NameTitle = styled.div`
  background: #B52E31;
  color: white;
  text-transform: uppercase;
  padding: 15px 25px;
  font-weight: bold;
`;
const Name = styled.div`
  font-size: 25px;
`;
const LastName = styled.span`
  margin-left: 5px;
  color: #333131;
`;
const Title = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
const Info = styled.div`
  background: #33373D;
  color: #85878B;
  padding: 7px 25px;
  font-size: 13px;
  border-bottom: 1px solid #26292e;
  font-weight: bold;
`;
const AboutFooter = styled.div`
  margin-top: 12px;
  text-align: center;
`;
const SocialLinks = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  li {
    display: inline-block;
    margin-right: 2px;
    text-align: center;
  }
`;
const InfoIcon = styled.i`
  margin-left: 5px;
`;
const FooterTag = styled.div`
  font-size: 12px;
  color: #999;
`;
