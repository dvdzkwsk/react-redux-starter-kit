import { connect } from 'react-redux'
import {
  updateSearch,
  updatePage,
  updatePerPage,
  incrementPage,
  decrementPage,
  fetchRules
} from '../modules/rules'

import Rules from '../components/Rules'

const mapDispatchToProps = {
  updateSearch,
  updatePage,
  updatePerPage,
  incrementPage,
  decrementPage,
  fetchRules
}

const mapStateToProps = (state) => state.rules.getIn(['result', 'payload']).toJS()

export default connect(mapStateToProps, mapDispatchToProps)(Rules)
