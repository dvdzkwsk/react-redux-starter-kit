import { connect } from 'react-redux'
import {
  updateConditionDimension,
  updateConditionOp,
  updateConditionValue,
  deleteCondition
} from '../modules/rule'
import Condition from '../components/Condition'

const mapDispatchToProps = {
  updateConditionDimension,
  updateConditionOp,
  updateConditionValue,
  deleteCondition
}

const mapStateToProps = (state, ownProps) => state.rule.getIn(['entities', 'conditions', ownProps.id]).toJS()

export default connect(mapStateToProps, mapDispatchToProps)(Condition)
