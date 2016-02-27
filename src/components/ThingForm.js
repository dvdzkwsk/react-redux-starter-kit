import React, { PropTypes } from 'react';

export default class ThingForm extends React.Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);

    this.state = {
      name: '',
      info: ''
    };

    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onInfoInputChange = this.onInfoInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onNameInputChange (event) {
    this.setState({
      name: event.target.value
    });
  }

  onInfoInputChange (event) {
    this.setState({
      info: event.target.value
    });
  }

  onFormSubmit (event) {
    event.preventDefault();

    const { name, info } = this.state;

    this.props.onFormSubmit({
      name,
      info
    });

    this.setState({
      name: '',
      info: ''
    });
  }

  render () {
    return (
      <form
        onSubmit={this.onFormSubmit}>

        <p
          className='input-group'>

          <input
            type='text'
            className='form-control'
            placeholder='Add a new thing here.'
            name='name'
            value={this.state.name}
            onChange={this.onNameInputChange} />

          <span
            className='input-group-btn'>
            <input
              type='submit'
              className='btn btn-primary'
              disabled={!this.state.name}
              value='Add New' />
          </span>

        </p>

      </form>
   );
  }
}
