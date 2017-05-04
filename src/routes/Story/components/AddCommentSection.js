import React from 'react';
import AddComment from './AddComment';

export const AddCommentSection = ({ addCommentHandler }) => {
  return (
    <div className="add-comment-section section-container">
      <h1>Add Comment</h1>
      <AddComment addCommentHandler={addCommentHandler} />
    </div>
  );
};

export default AddCommentSection;
