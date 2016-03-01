import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const fields = [];

const validate = (values) => {
  const errors = {};
  return errors;
};

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired
};

export class <%= pascalEntityName %> extends Component {
  render() {
    const {
      fields: {},
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
      </form>
    );
  }
}

<%= pascalEntityName %>.propTypes = propTypes;
<%= pascalEntityName %> = reduxForm({
  form: '<%= pascalEntityName %>',
  fields,
  validate
})(<%= pascalEntityName %>);

export default <%= pascalEntityName %>;
