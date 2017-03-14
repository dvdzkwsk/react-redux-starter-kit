import React from 'react'
import login from './Login.scss'

export class Login extends React.Component {
  submit (e) {
    e.preventDefault()
    console.log(this.refs.email.value)
    this.props.submitForm(this.refs.email.value, this.refs.password.value)
  }

  render () {
    return (
      <div className="panel panel-login">
        <div className="panel-header">
          <h3 className="panel-title">Log In</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={(e) => this.submit(e)}>
            <div className='form-group'>
              <input type='text' name='email' ref='email' placeholder="Username / Email" />
            </div>

            <div className='form-group'>
              <input type='password' name='password' ref='password' placeholder="Password" />
            </div>

            <div className='form-group'>
              <input type='submit' value='Submit' />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
