import { injectReducer } from '../../store/reducers'
import Counter from './containers/CounterContainer'
import reducer from './modules/counter'

export default store => {
  injectReducer(store, { key: 'counter', reducer })
  return Counter
}
