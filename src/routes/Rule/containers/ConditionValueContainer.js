import { connect } from 'react-redux'
import ConditionValue from '../components/ConditionValue'

const mapDispatchToProps = {}

const mapStateToProps = (state, ownProps) => {
  const condition = state.conditions.get(ownProps.id).toJS()
  const dimension = state.dimensions.get(condition.dimension).toJS()

  return {
    value: condition.value,
    ...dimension
  }
}

export default connect(mapStateToProps)(ConditionValue)
