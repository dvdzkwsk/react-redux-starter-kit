import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StoryMeta.scss';

class StoryMeta extends Component {
  static propTypes = {
    getStoryMeta: React.PropTypes.func.isRequired,
    storyMeta: React.PropTypes.object,
  }

  componentWillMount() {
    this.props.getStoryMeta(this.props.storyId);
  }

  getStoryInformation(storyMeta) {
    return (
      <div>
        <img className="story-thumb" src={storyMeta.imgUrl} />
        <a href={storyMeta.url}>
          <h2>{storyMeta.title}</h2>
        </a>
        <div>{`Topic: ${storyMeta.topic.name}`}</div>
        <div>{`Moderator: ${storyMeta.topic.mod}`}</div>
        <div>{`Votes: ${storyMeta.stats.votes}`}</div>
        <div>{`Unique Commenters: ${storyMeta.stats.uniqueCommenters}`}</div>
        <div>{`Comments: ${storyMeta.stats.comments}`}</div>
        <div>{`Comments within Geo: ${storyMeta.stats.commentsWithinGeo}`}</div>
      </div>
    );
  }

  render() {
    const storyMeta = this.props.storyMeta;
    return (
      <div>
        <h1>Story Meta</h1>
        { storyMeta ? this.getStoryInformation(storyMeta) : null }
      </div>
    )
  }
}

export default StoryMeta;
