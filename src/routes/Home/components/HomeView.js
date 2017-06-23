import React, { Component } from 'react'
import './HomeView.scss'

class HomeView extends Component {
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
    }).then((response) => {
      console.log(response)
    })
    .then((responseJson) => {
      console.log(responseJson)
    })
    .catch((error) => {
      console.error(error)
    })
  }
  render () {
    return (<div>
      <input type='text' id='login-email' placeholder='email' />
      <input type='password' id='login-password' placeholder='password' />
      <button id='x-btn-send-login' onClick={this.sendLogin}>Login</button>
    </div>)
  }
}

export default HomeView
