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
  requestRule,
  receiveRule,
  receiveError,
  fetchRule,
  postRule,
  receiveUpdatedRule,
  updateRule,
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
      state = ruleReducer(state, updateDescription('test'))
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
      expect(updateDescription()).to.have.property('type', UPDATE_DESCRIPTION)
    })

    it('Should assign the first argument to the "description" property.', () => {
      expect(updateDescription({ description: 'test' })).to.have.property('description', 'test')
    })

    it('Should have the "description" property if not provided.', () => {
      expect(updateDescription()).to.have.property('description')
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

  describe('(Action Creator) requestRule', () => {
    it('Should be exported as a function.', () => {
      expect(requestRule).to.be.a('function')
    })

    it('Should return an action with type "REQUEST_RULE".', () => {
      expect(requestRule()).to.have.property('type', REQUEST_RULE)
    })
  })

  describe('(Action Creator) receiveRule', () => {
    it('Should be exported as a function.', () => {
      expect(receiveRule).to.be.a('function')
    })

    it('Should return an action with type "RECEIVE_RULE".', () => {
      expect(receiveRule()).to.have.property('type', RECEIVE_RULE)
    })

    it('Should assign the first argument to the "rule" property.', () => {
      const rule = { description: '' }

      expect(receiveRule(rule)).to.have.property('rule', rule)
    })

    it('Should have the "rule" property if not provided.', () => {
      expect(receiveRule()).to.have.property('rule')
    })
  })

  // TODO test fetchRule
  // TODO test postRule

  describe('(Action Creator) receiveUpdatedRule', () => {
    it('Should be exported as a function.', () => {
      expect(receiveUpdatedRule).to.be.a('function')
    })

    it('Should return an action with type "RECEIVE_UPDATED_RULE".', () => {
      expect(receiveUpdatedRule()).to.have.property('type', RECEIVE_UPDATED_RULE)
    })

    it('Should assign the first argument to the "rule" property.', () => {
      const rule = { description: '' }

      expect(receiveUpdatedRule(rule)).to.have.property('rule', rule)
    })

    it('Should have the "rule" property if not provided.', () => {
      expect(receiveUpdatedRule()).to.have.property('rule')
    })
  })

  // TODO test updateRule

  // NOTE: if you have a more complex state, you will probably want to verify
  // that you did not mutate the state. In this case our state is just a number
  // (which cannot be mutated).
  /* describe('(Action Handler) COUNTER_INCREMENT', () => {
    it('Should increment the state by the action payload\'s "value" property.', () => {
      let state = ruleReducer(undefined, {})
      expect(state).to.equal(0)
      state = ruleReducer(state, increment(1))
      expect(state).to.equal(1)
      state = ruleReducer(state, increment(2))
      expect(state).to.equal(3)
      state = ruleReducer(state, increment(-3))
      expect(state).to.equal(0)
    })
  }) */
})
