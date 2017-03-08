import Immutable from 'immutable'
import {
  UPDATE_CONDITION_DIMENSION,
  UPDATE_CONDITION_OP,
  UPDATE_CONDITION_VALUE,
  DELETE_CONDITION,
  ADD_CONDITION,
  updateConditionDimension,
  updateConditionOp,
  updateConditionValue,
  deleteCondition,
  addCondition,
  default as conditionsReducer
} from 'routes/Rules/routes/Rule/modules/conditions'

describe('(Redux Module) Conditions', () => {
  it('Should export a constant UPDATE_CONDITION_DIMENSION.', () => {
    expect(UPDATE_CONDITION_DIMENSION).to.equal('UPDATE_CONDITION_DIMENSION')
  })

  it('Should export a constant UPDATE_CONDITION_OP.', () => {
    expect(UPDATE_CONDITION_OP).to.equal('UPDATE_CONDITION_OP')
  })

  it('Should export a constant UPDATE_CONDITION_VALUE.', () => {
    expect(UPDATE_CONDITION_VALUE).to.equal('UPDATE_CONDITION_VALUE')
  })

  it('Should export a constant DELETE_CONDITION.', () => {
    expect(DELETE_CONDITION).to.equal('DELETE_CONDITION')
  })

  it('Should export a constant ADD_CONDITION.', () => {
    expect(ADD_CONDITION).to.equal('ADD_CONDITION')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(conditionsReducer).to.be.a('function')
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = conditionsReducer(undefined, {})
      const INITIAL_STATE = Immutable.Map()

      expect(state).to.deep.equal(INITIAL_STATE)
      state = conditionsReducer(state, { type: '@@@@@@@' })
      expect(state).to.deep.equal(INITIAL_STATE)
      state = conditionsReducer(state, updateConditionOp({ id: 'test', op: false }))
      expect(state.getIn(['test', 'op'])).to.equal(false)
      state = conditionsReducer(state, { type: '@@@@@@@' })
      expect(state.getIn(['test', 'op'])).to.equal(false)
    })
  })

  describe('(Action Creator) updateConditionDimension', () => {
    it('Should be exported as a function.', () => {
      expect(updateConditionDimension).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_CONDITION_DIMENSION".', () => {
      expect(updateConditionDimension({ id: 'test', dimension: 'test' }))
      .to.have.property('type', UPDATE_CONDITION_DIMENSION)
    })

    it('Should assign the dimension value to the "dimension" property.', () => {
      expect(updateConditionDimension({ id: 'test', dimension: 'test' })).to.have.property('dimension', 'test')
    })
  })

  describe('(Action Creator) updateConditionOp', () => {
    it('Should be exported as a function.', () => {
      expect(updateConditionOp).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_CONDITION_OP".', () => {
      expect(updateConditionOp({ id: 'test', op: false })).to.have.property('type', UPDATE_CONDITION_OP)
    })

    it('Should assign the op value to the "op" property.', () => {
      expect(updateConditionOp({ id: 'test', op: false })).to.have.property('op', false)
    })
  })

  describe('(Action Creator) updateConditionValue', () => {
    it('Should be exported as a function.', () => {
      expect(updateConditionValue).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_CONDITION_VALUE".', () => {
      expect(updateConditionValue({ id: 'test', value: 'test' })).to.have.property('type', UPDATE_CONDITION_VALUE)
    })

    it('Should assign the value value to the "value" property.', () => {
      expect(updateConditionValue({ id: 'test', value: 'test' })).to.have.property('value', 'test')
    })
  })

  describe('(Action Creator) deleteCondition', () => {
    it('Should be exported as a function.', () => {
      expect(deleteCondition).to.be.a('function')
    })

    it('Should return an action with type "DELETE_CONDITION".', () => {
      expect(deleteCondition({ id: 'test', ruleId: 'test' })).to.have.property('type', DELETE_CONDITION)
    })

    it('Should assign the ruleId value to the "ruleId" property.', () => {
      expect(deleteCondition({ id: 'test', ruleId: 'test' })).to.have.property('ruleId', 'test')
    })
  })

  describe('(Action Creator) addCondition', () => {
    it('Should be exported as a function.', () => {
      expect(addCondition).to.be.a('function')
    })

    it('Should return an action with type "ADD_CONDITION".', () => {
      expect(addCondition('test')).to.have.property('type', ADD_CONDITION)
    })

    it('Should assign the first value to the "ruleId" property.', () => {
      expect(addCondition('test')).to.have.property('ruleId', 'test')
    })
  })
})
