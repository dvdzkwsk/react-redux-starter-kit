import { connect } from 'react-redux'
import { toggle } from '../store/rootReducers/drawer'

import Header from '../components/Header'

const mapDispatchToProps = {
  toggle
}

const mapStateToProps = (state) => ({
  loggedIn: !!state.auth.authToken,
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
