import { connect } from 'react-redux'

import Rules from '../components/Rules'

const mapStateToProps = (state) => state.navigation.toJS()

export default connect(mapStateToProps)(Rules)
