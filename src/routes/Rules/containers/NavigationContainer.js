import { connect } from 'react-redux'
import { updateSearch } from '../modules/navigation'
import { fetchRules } from '../modules/rules'

import Navigation from '../components/Navigation'

const mapDispatchToProps = {
  updateSearch,
  fetchRules
}

const mapStateToProps = (state) => state.navigation.toJS()

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
