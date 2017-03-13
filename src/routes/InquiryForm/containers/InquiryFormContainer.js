import { connect } from 'react-redux'
import InquiryForm from '../components/InquiryForm'
import { isEmpty } from 'lodash'
import { getService, getPromoCode } from '../modules/inquiryForm'
import { denormalize, serviceSchema } from 'store/entities'

const mapStateToProps = (state) => ({
  service: denormalize(
    state.get('inquiryForm').get('service'),
    serviceSchema,
    state.get('entities')
  ),
  promoCode: state.get('inquiryForm').get('promoCode')
})

const mapDispatchToProps = {
  onComponentDidMount: getService,
  validatePromoCode: getPromoCode
}

export default connect(mapStateToProps, mapDispatchToProps)(InquiryForm)
