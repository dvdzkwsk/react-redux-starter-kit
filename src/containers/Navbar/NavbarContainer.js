import { connect } from 'react-redux'
import Navbar from '../../components/Navbar'
import { isEmpty } from 'lodash'

const mapStateToProps = (state) => ({
  isLoggedIn: state.login && !isEmpty(state.login.accessToken)
})

export default connect(mapStateToProps)(Navbar)
