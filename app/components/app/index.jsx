import React, { Component as ReactComponent } from 'react';
if (__CLIENT__) {
  require('styles/core.css');
}

export default class App extends ReactComponent {
  constructor () {
    super();
  }

  render () {
    return <h1>Welcome to the Wirk Starter Kit!</h1>;
  }
};
