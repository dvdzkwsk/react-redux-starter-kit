import { connect } from 'react-redux'
import ActionValue from '../components/ActionValue'
import Actions from 'data/actions'
import {
  updateActionValue
} from '../modules/rule'

const mapDispatchToProps = {
  updateActionValue
}

const mapStateToProps = (state, ownProps) => state.rule.getIn(['entities', 'actions', ownProps.id]).toJS()

export default connect(mapStateToProps, mapDispatchToProps)(ActionValue)
