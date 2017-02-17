import Immutable from 'immutable'
import {
  UPDATE_STATUS,
  updateStatus
  default as statusReducer
} from 'routes/Rule/modules/status'

describe('(Redux Module) STATUS', () => {
  it('Should export a constant UPDATE_STATUS.', () => {
    expect(UPDATE_STATUS).to.equal('UPDATE_STATUS')
  })

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
      state = statusReducer(state, updateStatus('test'))
      expect(state.get('status')).to.equal('test')
      state = statusReducer(state, { type: '@@@@@@@' })
      expect(state.get('status')).to.equal('test')
    })
  })

  describe('(Action Creator) updateStatus', () => {
    it('Should be exported as a function.', () => {
      expect(updateStatus).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_DESCRIPTION".', () => {
      expect(updateStatus()).to.have.property('status', UPDATE_STATUS)
    })

    it('Should assign the first argument to the "description" property.', () => {
      expect(updateStatus({status: 'test'})).to.have.property('status', 'test')
    })

    it('Should have the "status" property if not provided.', () => {
      expect(updateStatus()).to.have.property('status')
    })
  })
})
