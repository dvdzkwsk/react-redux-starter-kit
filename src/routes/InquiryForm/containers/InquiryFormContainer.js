import { connect } from 'react-redux'
import InquiryForm from '../components/InquiryForm'
import { isEmpty } from 'lodash'
import { getService, getpromoCode } from '../modules/inquiryForm'

const mapStateToProps = (state) => ({
  callService: state.get('inquiryForm').get('callService'),
})

const mapDispatchToProps = {
  onComponentDidMount: getService
}

export default connect(mapStateToProps, mapDispatchToProps)(InquiryForm)
