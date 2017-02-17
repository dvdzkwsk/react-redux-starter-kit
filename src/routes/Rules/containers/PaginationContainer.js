import { connect } from 'react-redux'
import {
  incrementPage,
  decrementPage
} from '../modules/navigation'
import { fetchRules } from '../modules/rules'

import Pagination from '../components/Pagination'

const mapDispatchToProps = {
  incrementPage,
  decrementPage,
  fetchRules
}

const mapStateToProps = (state) => state.navigation.toJS()

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
