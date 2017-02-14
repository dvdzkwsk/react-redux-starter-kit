import { connect } from 'react-redux'
import {
  updatePage,
  updatePerPage,
  incrementPage,
  decrementPage,
  fetchRules
} from '../modules/rules'

import Pagination from '../components/Pagination'

const mapDispatchToProps = {
  updatePage,
  updatePerPage,
  incrementPage,
  decrementPage,
  fetchRules
}

const mapStateToProps = (state) => state.rules.getIn(['result', 'payload']).toJS()

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
