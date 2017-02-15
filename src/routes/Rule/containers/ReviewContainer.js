import { connect } from 'react-redux'
import Review from '../components/Review'
import { updateRule } from '../modules/rule'

const mapDispatchToProps = {
  updateRule
}

const mapStateToProps = (state, ownProps) => {
  const conditions = state.rule.getIn(['entities', 'conditions']).toList().toJS()
  console.log(conditions)
  const actions = state.rule.getIn(['entities', 'actions']).toList().toJS()
  console.log(actions)
  return {
    conditions,
    actions
  }
  return state
}

export default connect(mapStateToProps)(Review)
