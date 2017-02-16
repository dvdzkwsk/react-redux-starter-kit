import { connect } from 'react-redux'
// import { updateDescription } from '../modules/rule'
import DimensionSelector from '../components/DimensionSelector'

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  dimensions: state.dimensions.toJS()
})

export default connect(mapStateToProps)(DimensionSelector)
