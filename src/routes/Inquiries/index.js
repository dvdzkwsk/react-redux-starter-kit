import InquiryRoute from './routes/Inquiry'
import NewInquiryRoute from './routes/NewInquiry'

export default (store) => ({
  path : 'inquiries',
  childRoutes: [
    NewInquiryRoute(store),
    InquiryRoute(store)
  ]
})
