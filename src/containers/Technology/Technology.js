import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import _ from 'lodash';

import { actions as technologyActions } from '../../sagaDucks/technology/technology';
import { TechIcon } from '../../components';
import { Card } from '../index';

class TechnologyContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      referenceTechList: [],
      techList: [],
      toggleReference: false,
    };
  }
  componentWillMount() {
    this.props.requestTechnology();
  }
  componentWillReceiveProps(props) {
    const referenceTechList = [];
    const techList = _.orderBy(props.technology, [tech => tech.name.toLowerCase()], ['asc']).map((tech) => {
      let el = null;
      if (tech.showSkill && !tech.referenceOnly) {
        el = <TechIcon tech={tech} key={tech.name} />;
      } else if (tech.showSkill && tech.referenceOnly) {
        referenceTechList.push(<TechIcon tech={tech} key={tech.name} />);
      }
      return el;
    });
    this.setState({
      referenceTechList,
      techList,
    });
  }
  toggleReference = () => {
    this.setState({
      toggleReference: !this.state.toggleReference,
    });
  }
  render() {
    return (
      <Card title="Technology" icon="icon-code" showMore={false} onClick={() => this.toggleReference()} isMoreShown={this.state.toggleReference}>
        <TechIconsHolder>
          {this.state.techList}
        </TechIconsHolder>
        {this.state.toggleReference ? (
          <ReferenceTechIconsHolder>
            <ReferenceSpan>For Reference</ReferenceSpan>
            <TechIconsHolder>
              {this.state.referenceTechList}
            </TechIconsHolder>
          </ReferenceTechIconsHolder>
        ) : null}
      </Card>
    );
  }
}

TechnologyContainer.propTypes = {
  requestTechnology: PropTypes.func.isRequired,
  technology: PropTypes.any,
};

TechnologyContainer.defaultProps = {
  technology: [],
};

const mapStateToProps = state => (
  {
    technology: state.technology.data,
  }
);

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    ...technologyActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TechnologyContainer);

const TechIconsHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,100px);
  justify-content: space-between;
`;
const ReferenceSpan = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 15px;
`;
const ReferenceTechIconsHolder = styled.div`
  margin-top: 50px;
`;
