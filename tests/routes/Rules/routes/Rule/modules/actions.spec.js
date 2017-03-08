import Immutable from 'immutable'
import {
  UPDATE_ACTION_TYPE,
  UPDATE_ACTION_RANK,
  UPDATE_ACTION_YIELD,
  UPDATE_ACTION_VALUE,
  DELETE_ACTION,
  ADD_ACTION,
  updateActionType,
  updateActionRank,
  updateActionYield,
  updateActionValue,
  deleteAction,
  addAction,
  default as actionsReducer
} from 'routes/Rules/routes/Rule/modules/actions'

describe('(Redux Module) Actions', () => {
  it('Should export a constant UPDATE_ACTION_TYPE.', () => {
    expect(UPDATE_ACTION_TYPE).to.equal('UPDATE_ACTION_TYPE')
  })

  it('Should export a constant UPDATE_ACTION_RANK.', () => {
    expect(UPDATE_ACTION_RANK).to.equal('UPDATE_ACTION_RANK')
  })

  it('Should export a constant UPDATE_ACTION_YIELD.', () => {
    expect(UPDATE_ACTION_YIELD).to.equal('UPDATE_ACTION_YIELD')
  })

  it('Should export a constant UPDATE_ACTION_VALUE.', () => {
    expect(UPDATE_ACTION_VALUE).to.equal('UPDATE_ACTION_VALUE')
  })

  it('Should export a constant DELETE_ACTION.', () => {
    expect(DELETE_ACTION).to.equal('DELETE_ACTION')
  })

  it('Should export a constant ADD_ACTION.', () => {
    expect(ADD_ACTION).to.equal('ADD_ACTION')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(actionsReducer).to.be.a('function')
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = actionsReducer(undefined, {})
      const INITIAL_STATE = Immutable.Map()

      expect(state).to.deep.equal(INITIAL_STATE)
      state = actionsReducer(state, { type: '@@@@@@@' })
      expect(state).to.deep.equal(INITIAL_STATE)
      state = actionsReducer(state, updateActionRank({ id: 'test', rank: 10 }))
      expect(state.getIn(['test', 'rank'])).to.equal(10)
      state = actionsReducer(state, { type: '@@@@@@@' })
      expect(state.getIn(['test', 'rank'])).to.equal(10)
    })
  })

  describe('(Action Creator) updateActionType', () => {
    it('Should be exported as a function.', () => {
      expect(updateActionType).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_ACTION_TYPE".', () => {
      expect(updateActionType({ id: 'test', _type: 'test' })).to.have.property('type', UPDATE_ACTION_TYPE)
    })

    it('Should assign the _type value to the "_type" property.', () => {
      expect(updateActionType({ id: 'test', _type: 'test' })).to.have.property('_type', 'test')
    })
  })

  describe('(Action Creator) updateActionRank', () => {
    it('Should be exported as a function.', () => {
      expect(updateActionRank).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_ACTION_RANK".', () => {
      expect(updateActionRank({ id: 'test', rank: 10 })).to.have.property('type', UPDATE_ACTION_RANK)
    })

    it('Should assign the rank value to the "rank" property.', () => {
      expect(updateActionRank({ id: 'test', rank: 10 })).to.have.property('rank', 10)
    })
  })

  describe('(Action Creator) updateActionYield', () => {
    it('Should be exported as a function.', () => {
      expect(updateActionYield).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_ACTION_YIELD".', () => {
      expect(updateActionYield({ id: 'test', _yield: 10 })).to.have.property('type', UPDATE_ACTION_YIELD)
    })

    it('Should assign the _yield value to the "_yield" property.', () => {
      expect(updateActionYield({ id: 'test', _yield: 10 })).to.have.property('_yield', 10)
    })
  })

  describe('(Action Creator) updateActionValue', () => {
    it('Should be exported as a function.', () => {
      expect(updateActionValue).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_ACTION_VALUE".', () => {
      expect(updateActionValue({ id: 'test', key: 'test', value: 'test' }))
      .to.have.property('type', UPDATE_ACTION_VALUE)
    })

    it('Should assign the value value to the "value" property.', () => {
      expect(updateActionValue({ id: 'test', key: 'test', value: 'test' })).to.have.property('value', 'test')
    })
  })

  describe('(Action Creator) deleteAction', () => {
    it('Should be exported as a function.', () => {
      expect(deleteAction).to.be.a('function')
    })

    it('Should return an action with type "DELETE_ACTION".', () => {
      expect(deleteAction({ id: 'test', ruleId: 'test' })).to.have.property('type', DELETE_ACTION)
    })

    it('Should assign the ruleId value to the "ruleId" property.', () => {
      expect(deleteAction({ id: 'test', ruleId: 'test' })).to.have.property('ruleId', 'test')
    })
  })

  describe('(Action Creator) addAction', () => {
    it('Should be exported as a function.', () => {
      expect(addAction).to.be.a('function')
    })

    it('Should return an action with type "ADD_ACTION".', () => {
      expect(addAction({ id: 'test' })).to.have.property('type', ADD_ACTION)
    })

    it('Should assign the first value to the "ruleId" property.', () => {
      expect(addAction('test')).to.have.property('ruleId', 'test')
    })
  })
})
