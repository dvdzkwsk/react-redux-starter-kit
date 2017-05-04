import { connect } from 'react-redux'
import {
  getStoryMeta,
  addComment,
  getComments,
} from '../modules/story'
import StoryView from '../components/StoryView'

const mapDispatchToProps = (dispatch) => ({
  getStoryMeta: (storyId) => dispatch(getStoryMeta(storyId)),
  addComment: (comment) => dispatch(addComment(comment)),
  getComments: (storyId) => dispatch(getComments(storyId)),
});

const mapStateToProps = (state) => ({
  storyMeta: state.story.storyMeta,
  comments: state.story.comments,
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryView);
