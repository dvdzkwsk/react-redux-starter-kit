import { connect } from 'react-redux'
import {
  updatePage,
  updatePerPage,
  updateSearch
} from '../modules/navigation'
import { fetchRules } from '../modules/rules'

import Navigation from '../components/Navigation'

const mapDispatchToProps = {
  updatePage,
  updatePerPage,
  updateSearch,
  fetchRules
}

const mapStateToProps = (state) => state.navigation.toJS()

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
