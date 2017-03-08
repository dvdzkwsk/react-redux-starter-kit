import { connect } from 'react-redux'
import Services from '../components/Services'
import { isEmpty } from 'lodash'
import { getAllServices } from '../modules/services'

const mapStateToProps = (state) => ({
  allServices: state.get('services').get('allServices')
})

const mapDispatchToProps = {
  onComponentDidMount: getAllServices
}

export default connect(mapStateToProps, mapDispatchToProps)(Services)
