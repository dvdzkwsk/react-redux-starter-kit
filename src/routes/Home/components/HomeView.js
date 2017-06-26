import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import './HomeView.scss'

class HomeView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      auth_token: ''
    }
  }

  sendLogin () {
    fetch('http://localhost:3000/authenticate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: document.getElementById('login-email').value,
        password: document.getElementById('login-password').value,
      })
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.auth_token)
      this.setState({
        auth_token: responseJson.auth_token
      })
      browserHistory.push('/characters')
    })
    .catch((error) => {
      console.error(error)
    })
  }
  render () {
    return (<div>
      <input type='text' id='login-email' placeholder='email' />
      <input type='password' id='login-password' placeholder='password' />
      <button id='x-btn-send-login' onClick={() => this.sendLogin()}>Login</button>
    </div>)
  }
}

export default HomeView
