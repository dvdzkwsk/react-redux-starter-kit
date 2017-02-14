import { connect } from 'react-redux'
import ActionValue from '../components/ActionValue'
import Actions from 'data/actions'

const mapDispatchToProps = {}

const mapStateToProps = (state, ownProps) => state.rule.getIn(['entities', 'actions', ownProps.id]).toJS()

export default connect(mapStateToProps)(ActionValue)
