import { connect } from 'react-redux'
import ConditionValue from '../components/ConditionValue'

const mapDispatchToProps = {}

const mapStateToProps = (state, ownProps) => {
  const condition = state.rule.getIn(['entities', 'conditions', ownProps.id]).toJS()
  const dimension = state.dimensions.getIn(['entities', 'dimensions', condition.dimension]).toJS()

  return {
    value: condition.value,
    ...dimension
  }
}

export default connect(mapStateToProps)(ConditionValue)
