import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const propTypes = {
};

class <%= pascalEntityName %> extends Component {
  render() {
    return (

    )
  }
}

const mapStateToProps = (state) => {
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {};
}

<%= pascalEntityName %>.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= pascalEntityName %>);

