import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
  static propTypes = {
    storyId: React.PropTypes.number,
    getComments: React.PropTypes.func,
    addCommentHandler: React.PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.getComments(this.props.storyId);
  }

  render() {
    const { comments } = this.props;
    return (
      <div className="comments section-container">
        <h1>Comments</h1>
        {
          comments ? comments.map((comment, idx) => (
            [
              <Comment
                comment={comment}
                addCommentHandler={this.props.addCommentHandler}
                number={idx} />,
              <br />
            ]
          )) : null
        }
      </div>
    );
  }

}

export default Comments;
