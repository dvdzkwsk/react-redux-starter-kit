import { connect } from 'react-redux'
import { deleteRule } from '../modules/rules'
import RuleDescription from '../components/RuleDescription'

const mapStateToProps = (state, ownProps) => state.rules.get(ownProps.id).toJS()

const mapDispatchToProps = {
  deleteRule
}

export default connect(mapStateToProps, mapDispatchToProps)(RuleDescription)
