import { connect } from 'react-redux'
import RuleDescription from '../components/RuleDescription'

const mapDispatchToProps = {}

const mapStateToProps = (state, ownProps) => state.rules.getIn(['entities', 'rules', ownProps.id]).toJS()

export default connect(mapStateToProps)(RuleDescription)
