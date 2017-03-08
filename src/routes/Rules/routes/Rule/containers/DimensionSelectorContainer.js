import { connect } from 'react-redux'
import DimensionSelector from '../components/DimensionSelector'

const mapStateToProps = (state) => ({
  dimensions: state.dimensions.toJS()
})

export default connect(mapStateToProps)(DimensionSelector)
