import { connect } from 'react-redux'
import { getStoryMeta } from '../modules/story'
import StoryView from '../components/StoryView'

const mapDispatchToProps = (dispatch) => ({
  getStoryMeta: (storyId) => dispatch(getStoryMeta(storyId)),
});

const mapStateToProps = (state) => ({
  storyMeta: state.story
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryView);
