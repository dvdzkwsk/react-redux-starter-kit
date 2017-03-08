import { connect } from 'react-redux'
import SubmitButton from '../components/SubmitButton'

const mapStateToProps = (state) => state.navigation.toJS()

export default connect(mapStateToProps)(SubmitButton)
