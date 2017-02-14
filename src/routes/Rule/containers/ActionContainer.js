import { connect } from 'react-redux'
import {
  updateActionType,
  updateActionRank,
  updateActionYield,
  //updateActionValue,
  deleteAction
} from '../modules/rule'
import Action from '../components/Action'

const mapDispatchToProps = {
  updateActionType,
  updateActionRank,
  updateActionYield,
  //updateActionValue,
  deleteAction
}

const mapStateToProps = (state, ownProps) => state.rule.getIn(['entities', 'actions', ownProps.id]).toJS()

export default connect(mapStateToProps, mapDispatchToProps)(Action)
