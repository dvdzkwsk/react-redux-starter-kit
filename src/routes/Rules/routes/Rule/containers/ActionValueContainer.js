import { connect } from 'react-redux'
import ActionValue from '../components/ActionValue'
import {
  updateActionValue
} from '../modules/actions'

const mapDispatchToProps = {
  updateActionValue
}

const mapStateToProps = (state, ownProps) => state.actions.get(ownProps.id).toJS()

export default connect(mapStateToProps, mapDispatchToProps)(ActionValue)
