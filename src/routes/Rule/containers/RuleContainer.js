import { connect } from 'react-redux'
import {
  updateDescription,
  addCondition,
  addAction,
  updateRule
} from '../modules/rule'
import Rule from '../components/Rule'

const mapDispatchToProps = {
  updateDescription,
  addCondition,
  addAction,
  updateRule
}

const mapStateToProps = (state) => state.rule.getIn(['entities', 'rules']).first().toJS()

export default connect(mapStateToProps, mapDispatchToProps)(Rule)
