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
        <Avatar>
          <img src="https://res.cloudinary.com/dfrhytey3/image/upload/v1520350961/icon_jgxnta.jpg" alt="profile" />
        </Avatar>
        <NameTitle>
          <Name>{this.props.about.first_name} {this.props.about.last_name}</Name>
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
