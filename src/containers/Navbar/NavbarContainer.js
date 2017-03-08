import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { updateAccessToken } from 'store/authentication'

import Navbar from '../../components/Navbar'

const mapStateToProps = (state) => ({
  isLoggedIn: !isEmpty(state.get('authentication').get('accessToken'))
})

const mapDispatchToProps = {
  logout: (e) => {
    e.preventDefault()
    return updateAccessToken(null)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
