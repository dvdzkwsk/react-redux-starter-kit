import { connect } from 'react-redux'

import Header from '../components/Header'

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  loggedIn: !!state.auth.authToken,
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
