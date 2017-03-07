import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { updateCurrentUser } from 'routes/Login/modules/login'

import Navbar from '../../components/Navbar'

const mapStateToProps = (state) => ({
  isLoggedIn: state.login && !isEmpty(state.login.accessToken)
})

const mapDispatchToProps = {
  logout: () => updateCurrentUser(null, null)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
