import Immutable from 'immutable'
import statusReducer from 'routes/Rule/modules/status'

describe('(Redux Module) STATUS', () => {
  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(statusReducer).to.be.a('function')
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = statusReducer(undefined, {})
      const INITIAL_STATE = Immutable.Map({})

      expect(state).to.deep.equal(INITIAL_STATE)
      state = statusReducer(state, { type: '@@@@@@@' })
      expect(state).to.deep.equal(INITIAL_STATE)
    })
  })
})
