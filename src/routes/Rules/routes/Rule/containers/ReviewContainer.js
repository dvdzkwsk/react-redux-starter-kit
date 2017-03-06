import { connect } from 'react-redux'
import Review from '../components/Review'

const mapStateToProps = (state, ownProps) => ({
  conditions: state.conditions.toList().toJS(),
  actions: state.actions.toList().toJS()
})

export default connect(mapStateToProps)(Review)
