import React from 'react';
import AddComment from './AddComment';

export const Comment = ({
  comment,
  number,
  addCommentHandler
}) => {

  return (
    <div className="comment">
      <strong>#{ comment.id }</strong>
      <div>
        <span>{`Member: ${comment.member} `}</span>
        <span>{`Votes: ${comment.votes} `}</span>
        <span>{`TTL: ${comment.ttl} `}</span>
      </div>
      <div>
        { comment.text }
      </div>
      <div>
        <a href="#">Reply</a>
        <AddComment addCommentHandler={addCommentHandler} />
      </div>
    </div>
  );
};

export default Comment;
