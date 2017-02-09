import { connect } from 'react-redux'
import { searchValueChanged } from '../modules/searchBar'

import SearchBar from '../components/SearchBar'

const mapDispatchToProps = {
  searchValueChanged
}

export default connect(null, mapDispatchToProps)(SearchBar)
