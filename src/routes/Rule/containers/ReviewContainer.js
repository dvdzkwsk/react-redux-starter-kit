import { connect } from 'react-redux'
import { List } from 'immutable'
import Review from '../components/Review'
import { updateRule } from '../modules/rule'

const mapDispatchToProps = {
  updateRule
}

const mapStateToProps = (state, ownProps) => ({
  conditions: state.conditions.toList().toJS(),
  actions: state.actions.toList().toJS()
})

export default connect(mapStateToProps)(Review)
