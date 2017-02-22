import Immutable from 'immutable'
import {
  REQUEST_DIMENSIONS,
  RECEIVE_DIMENSIONS,
  // fetchDimensions,
  default as dimensionsReducer
} from 'routes/Rule/modules/dimensions'

describe('(Redux Module) Dimensions', () => {
  it('Should export a constant REQUEST_DIMENSIONS.', () => {
    expect(REQUEST_DIMENSIONS).to.equal('REQUEST_DIMENSIONS')
  })

  it('Should export a constant RECEIVE_DIMENSIONS.', () => {
    expect(RECEIVE_DIMENSIONS).to.equal('RECEIVE_DIMENSIONS')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(dimensionsReducer).to.be.a('function')
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = dimensionsReducer(undefined, {})
      const INITIAL_STATE = Immutable.Map()

      expect(state).to.deep.equal(INITIAL_STATE)
      state = dimensionsReducer(state, { type: '@@@@@@@' })
      expect(state).to.deep.equal(INITIAL_STATE)
    })
  })

  // TODO test fetchDimensions
})
