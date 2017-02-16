import { connect } from 'react-redux'
import {
  updateActionType,
  updateActionRank,
  updateActionYield,
  deleteAction
} from '../modules/actions'
import Action from '../components/Action'

const mapDispatchToProps = {
  updateActionType,
  updateActionRank,
  updateActionYield,
  deleteAction
}

const mapStateToProps = (state, ownProps) => state.actions.get(ownProps.id).toJS()

export default connect(mapStateToProps, mapDispatchToProps)(Action)
