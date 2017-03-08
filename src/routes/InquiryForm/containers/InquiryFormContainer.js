import { connect } from 'react-redux'
import InquiryForm from '../components/InquiryForm'
import { isEmpty } from 'lodash'
import { getInquiryForm } from '../modules/inquiryForm'

const mapStateToProps = (state) => ({
  activeInquiryForm: state.get('inquiryForm').get('activeInquiryForm')
})

const mapDispatchToProps = {
  onComponentDidMount: newInquiryForm
}

export default connect(mapStateToProps, mapDispatchToProps)(InquiryForm)
