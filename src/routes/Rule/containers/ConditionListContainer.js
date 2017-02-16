import { connect } from 'react-redux'
import {
  addCondition
} from '../modules/conditions'
import ConditionList from '../components/ConditionList'

const mapDispatchToProps = {
  addCondition
}

const mapStateToProps = (state, ownProps) => ({
  conditions: state.conditions.toJS()
})

export default connect(mapStateToProps, mapDispatchToProps)(ConditionList)
