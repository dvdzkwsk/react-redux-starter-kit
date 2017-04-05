import React from 'react'

export class Login extends React.Component {
  submit (e) {
    e.preventDefault()
    console.log(this.refs.email.value)
    this.props.submitForm(this.refs.email.value, this.refs.password.value)
  }

  render () {
    return (
      <div>
        <form onSubmit={(e) => this.submit(e)}>
          <div className='form-group'>
            <input type='text' name='email' ref='email' />
          </div>

          <div className='form-group'>
            <input type='password' name='password' ref='password' />
          </div>

          <div className='form-group'>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    )
  }
}

export default Login
