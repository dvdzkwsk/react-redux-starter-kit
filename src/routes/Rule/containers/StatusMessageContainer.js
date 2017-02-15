import { connect } from 'react-redux'
import StatusMessage from '../components/StatusMessage'

const mapDispatchToProps = {}

const mapStateToProps = (state) => state.rule.get('result').toJS()

export default connect(mapStateToProps, mapDispatchToProps)(StatusMessage)
