import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { logout } from 'store/authentication'

import Navbar from '../../components/Navbar'

const mapStateToProps = (state) => ({
  isLoggedIn: !isEmpty(state.get('authentication').get('accessToken'))
})

const mapDispatchToProps = {
  logout: (e) => {
    e.preventDefault()
    return logout()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
