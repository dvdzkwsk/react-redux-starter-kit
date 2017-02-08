import { connect } from 'react-redux'

import Header from '../components/Header'

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  loggedIn: !!state.auth.authToken
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
