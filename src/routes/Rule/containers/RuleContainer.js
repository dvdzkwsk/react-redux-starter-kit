import { connect } from 'react-redux'
import {
  updateDescription,
  addCondition
} from '../modules/rule'
import Rule from '../components/Rule'

const mapDispatchToProps = {
  updateDescription,
  addCondition
}

const mapStateToProps = (state) => state.rule.getIn(['entities', 'rules']).first().toJS()

export default connect(mapStateToProps, mapDispatchToProps)(Rule)
