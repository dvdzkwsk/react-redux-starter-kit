import { connect } from 'react-redux'
import InquiryForm from '../components/InquiryForm'
import { isEmpty } from 'lodash'
import { getService, getPromoCode } from '../modules/inquiryForm'

const mapStateToProps = (state) => ({
  service: state.get('inquiryForm').get('service'),
  promoCode: state.get('inquiryForm').get('promoCode')
})

const mapDispatchToProps = {
  onComponentDidMount: getService,
  validatePromoCode: getPromoCode
}

export default connect(mapStateToProps, mapDispatchToProps)(InquiryForm)
