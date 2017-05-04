import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StoryMeta from './StoryMeta';
import AddCommentSection from './AddCommentSection';
import Comments from './Comments';

class StoryView extends Component {
  static propTypes = {
    getStoryMeta: React.PropTypes.func.isRequired,
    getComments: React.PropTypes.func.isRequired,
    addComment: React.PropTypes.func.isRequired,
    comments: React.PropTypes.array,
    storyId: React.PropTypes.number,
  }

  addCommentHandler = (textarea) => {
    const text = textarea.value;
    if (text.length) {
      this.props.addComment(text);
    }
  }

  render () {
    return (
      <div className="story-view">
        <StoryMeta
          storyId={ 123 }
          storyMeta={ this.props.storyMeta }
          getStoryMeta={ this.props.getStoryMeta } />
        <hr />
        <AddCommentSection addCommentHandler={ this.addCommentHandler }/>
        <hr />
        <Comments
          storyId={ 123 }
          getComments={ this.props.getComments }
          comments={ this.props.comments }
          addCommentHandler={ this.addCommentHandler } />
      </div>
    );
  }
}

export default StoryView;
