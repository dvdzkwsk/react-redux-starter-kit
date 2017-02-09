import { connect } from 'react-redux'
import { searchValueChanged } from '../modules/searchBar'

import SearchBar from '../components/SearchBar'

const mapDispatchToProps = {
  searchValueChanged
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
