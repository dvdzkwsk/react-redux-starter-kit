import { connect } from 'react-redux'
import { toggle } from '../store/rootReducers/drawer'

import MenuDrawer from '../components/MenuDrawer'

const mapDispatchToProps = {
  toggle
}

const mapStateToProps = (state) => ({
  loggedIn: !!state.auth.authToken,
  open: state.drawer.open
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuDrawer)
