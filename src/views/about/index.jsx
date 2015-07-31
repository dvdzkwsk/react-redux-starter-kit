import React from 'react';

export default class AboutView extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className='view view--home'>
        <h1>This is the about view</h1>
        <p>It's just here to test whether the router works on the server!</p>
      </div>
    );
  }
}
