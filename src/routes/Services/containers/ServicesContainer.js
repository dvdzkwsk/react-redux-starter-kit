import { connect } from 'react-redux'
import Services from '../components/Services'
import { isEmpty } from 'lodash'
import { getAllServices } from '../modules/services'
import { denormalize, categorySchema } from 'store/entities'

const mapStateToProps = (state) => ({
  allServices: denormalize(
    state.get('services').get('allServices'),
    [categorySchema],
    state.get('entities')
  )
})

const mapDispatchToProps = {
  onComponentDidMount: getAllServices
}

export default connect(mapStateToProps, mapDispatchToProps)(Services)
