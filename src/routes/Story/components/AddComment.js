import React from 'react';

export const AddComment = ({ addCommentHandler }) => {
  let commentTextArea;

  const addCommentToThread = () => {
    addCommentHandler(commentTextArea);
  };

  const addActionMarkupToComment = () => {
    commentTextArea.value += "<<message-official>>";
  }

  return (
    <div className="add-comment">
      <textarea ref={(textarea) => { commentTextArea = textarea; }}/>
      <button
        type="button"
        onClick={ addCommentToThread }>
        Add Comment
      </button>
      <button onClick={addActionMarkupToComment}>Add Action</button>
    </div>
  );
};

export default AddComment;
