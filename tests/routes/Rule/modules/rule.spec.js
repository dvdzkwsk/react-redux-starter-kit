import Immutable from 'immutable'
import {
  UPDATE_DESCRIPTION,
  CREATE_RULE,
  REQUEST_RULE,
  RECEIVE_RULE,
  POST_RULE,
  RECEIVE_UPDATED_RULE,
  RECEIVE_ERROR,
  updateDescription,
  createRule,
  receiveError,
  // fetchRule,
  // postRule,
  // updateRule,
  default as ruleReducer
} from 'routes/Rule/modules/rule'

describe('(Redux Module) Rule', () => {
  it('Should export a constant UPDATE_DESCRIPTION.', () => {
    expect(UPDATE_DESCRIPTION).to.equal('UPDATE_DESCRIPTION')
  })

  it('Should export a constant CREATE_RULE.', () => {
    expect(CREATE_RULE).to.equal('CREATE_RULE')
  })

  it('Should export a constant REQUEST_RULE.', () => {
    expect(REQUEST_RULE).to.equal('REQUEST_RULE')
  })

  it('Should export a constant RECEIVE_RULE.', () => {
    expect(RECEIVE_RULE).to.equal('RECEIVE_RULE')
  })

  it('Should export a constant POST_RULE.', () => {
    expect(POST_RULE).to.equal('POST_RULE')
  })

  it('Should export a constant RECEIVE_UPDATED_RULE.', () => {
    expect(RECEIVE_UPDATED_RULE).to.equal('RECEIVE_UPDATED_RULE')
  })

  it('Should export a constant RECEIVE_ERROR.', () => {
    expect(RECEIVE_ERROR).to.equal('RECEIVE_ERROR')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(ruleReducer).to.be.a('function')
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = ruleReducer(undefined, {})
      const INITIAL_STATE = Immutable.Map()

      expect(state).to.deep.equal(INITIAL_STATE)
      state = ruleReducer(state, { type: '@@@@@@@' })
      expect(state).to.deep.equal(INITIAL_STATE)
      state = ruleReducer(state, updateDescription({ description: 'test' }))
      expect(state.get('description')).to.equal('test')
      state = ruleReducer(state, { type: '@@@@@@@' })
      expect(state.get('description')).to.equal('test')
    })
  })

  describe('(Action Creator) updateDescription', () => {
    it('Should be exported as a function.', () => {
      expect(updateDescription).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_DESCRIPTION".', () => {
      expect(updateDescription({ description: 'test' })).to.have.property('type', UPDATE_DESCRIPTION)
    })

    it('Should assign the description value to the "description" property.', () => {
      expect(updateDescription({ description: 'test' })).to.have.property('description', 'test')
    })
  })

  describe('(Action Creator) createRule', () => {
    it('Should be exported as a function.', () => {
      expect(createRule).to.be.a('function')
    })

    it('Should return an action with type "CREATE_RULE".', () => {
      expect(createRule()).to.have.property('type', CREATE_RULE)
    })
  })

  describe('(Action Creator) receiveError', () => {
    it('Should be exported as a function.', () => {
      expect(receiveError).to.be.a('function')
    })

    it('Should return an action with type "RECEIVE_ERROR".', () => {
      expect(receiveError('test')).to.have.property('type', RECEIVE_ERROR)
    })

    it('Should assign the first argument to the "error" property.', () => {
      expect(receiveError('test')).to.have.property('error', 'test')
    })
  })

  // TODO test fetchRule
  // TODO test postRule
  // TODO test updateRule
})
