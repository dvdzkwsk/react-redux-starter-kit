import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StoryMeta from './StoryMeta';

class StoryView extends Component {
  static propTypes = {
    getStoryMeta: React.PropTypes.func.isRequired,
    storyId: React.PropTypes.number,
  }

  componentWillMount() {
    
  }

  render () {
    return (
      <div>
        <StoryMeta
          storyId={ 123 }
          storyMeta={ this.props.storyMeta }
          getStoryMeta={ this.props.getStoryMeta } />
      </div>
    )
  }
}

export default StoryView
