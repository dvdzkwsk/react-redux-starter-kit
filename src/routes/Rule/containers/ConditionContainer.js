import { connect } from 'react-redux'
import {
  updateConditionDimension,
  updateConditionOp,
  updateConditionValue,
  deleteCondition
} from '../modules/conditions'
import Condition from '../components/Condition'

const mapDispatchToProps = {
  updateConditionDimension,
  updateConditionOp,
  updateConditionValue,
  deleteCondition
}

const mapStateToProps = (state, ownProps) => state.conditions.get(ownProps.id).toJS()

export default connect(mapStateToProps, mapDispatchToProps)(Condition)
