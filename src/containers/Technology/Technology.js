import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as _ from 'lodash';

import { actions as technologyActions } from '../../ducks/technology';
import { TechIcon } from '../../components';

class TechnologyContainer extends React.Component {
  componentWillMount() {
    this.props.requestTechnology();
  }
  render() {
    const referenceTechList = [];
    const techList = _.orderBy(this.props.technology, [tech => tech.name.toLowerCase()], ['asc']).map((tech) => {
      let el = null;
      if (tech.showSkill && !tech.referenceOnly) {
        el = <TechIcon tech={tech} key={tech.name} />;
      } else if (tech.showSkill && tech.referenceOnly) {
        referenceTechList.push(<TechIcon tech={tech} key={tech.name} />);
      }
      return el;
    });
    return (
      <div>
        <TechIconsHolder>
          {techList}
        </TechIconsHolder>
        <ReferenceTechIconsHolder>
          <ReferenceSpan>Reference Only</ReferenceSpan>
          <TechIconsHolder>
            {referenceTechList}
          </TechIconsHolder>
        </ReferenceTechIconsHolder>
      </div>
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
