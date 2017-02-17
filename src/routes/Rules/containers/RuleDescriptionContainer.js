import { connect } from 'react-redux'
import RuleDescription from '../components/RuleDescription'

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.id)
  return state.rules.get(ownProps.id).toJS()
}

export default connect(mapStateToProps)(RuleDescription)
