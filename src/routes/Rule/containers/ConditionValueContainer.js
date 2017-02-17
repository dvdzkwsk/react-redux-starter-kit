import { connect } from 'react-redux'
import Immutable from 'immutable'
import ConditionValue from '../components/ConditionValue'

const mapDispatchToProps = {}

const mapStateToProps = (state, ownProps) => {
  const condition = state.conditions.get(ownProps.id, Immutable.Map()).toJS()
  const dimension = state.dimensions.get(condition.dimension, Immutable.Map()).toJS()

  return {
    value: condition.value,
    ...dimension
  }
}

export default connect(mapStateToProps)(ConditionValue)
