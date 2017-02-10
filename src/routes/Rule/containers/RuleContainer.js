import { connect } from 'react-redux'
import { updateDescription } from '../modules/rule'
import Rule from '../components/Rule'



const mapDispatchToProps = {
  updateDescription
}

const mapStateToProps = (state) => ({
  ...state.rule
})

export default connect(mapStateToProps, mapDispatchToProps)(Rule)
