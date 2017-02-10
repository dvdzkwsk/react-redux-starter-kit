import {
  UPDATE_DESCRIPTION,
  REQUEST_RULE,
  RECEIVE_RULE,
  updateDescription,
  requestRule,
  receiveRule,
  fetchRule,
  default as ruleReducer
} from 'routes/Rule/modules/rule'

describe('(Redux Module) Rule', () => {
  it('Should export a constant REQUEST_RULE.', () => {
    expect(REQUEST_RULE).to.equal('REQUEST_RULE')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(ruleReducer).to.be.a('function')
    })

    it('Should initialize with a state containing a description.', () => {
      expect(ruleReducer(undefined, {})).to.have.property('description')
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = ruleReducer(undefined, {})
      const INITIAL_STATE = Object.assign({}, state)

      expect(state).to.deep.equal(INITIAL_STATE)
      state = ruleReducer(state, { type: '@@@@@@@' })
      expect(state).to.deep.equal(INITIAL_STATE)
      state = ruleReducer(state, updateDescription('test'))
      expect(state.description).to.equal('test')
      state = ruleReducer(state, { type: '@@@@@@@' })
      expect(state.description).to.equal('test')
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

  describe('(Action Creator) updateDescription', () => {
    it('Should be exported as a function.', () => {
      expect(updateDescription).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_DESCRIPTION".', () => {
      expect(updateDescription()).to.have.property('type', UPDATE_DESCRIPTION)
    })

    it('Should assign the first argument to the "search" property.', () => {
      expect(updateDescription('test')).to.have.property('description', 'test')
    })

    it('Should have the "search" property if not provided.', () => {
      expect(updateDescription()).to.have.property('description')
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
      const rule = {description: ''}

      expect(receiveRule(rule)).to.have.property('rule', rule)
    })

    it('Should have the "rule" property if not provided.', () => {
      expect(receiveRule()).to.have.property('rule')
    })
  })

  describe('(Action Creator) fetchRule', () => {
    let _globalState
    let _dispatchSpy
    let _getStateSpy

    beforeEach(() => {
      _globalState = {
        rules : ruleReducer(undefined, {})
      }
      _dispatchSpy = sinon.spy((action) => {
        _globalState = {
          ..._globalState,
          rules : ruleReducer(_globalState.rules, action)
        }
      })
      _getStateSpy = sinon.spy(() => {
        return _globalState
      })
    })

    it('Should be exported as a function.', () => {
      expect(fetchRule).to.be.a('function')
    })

    it('Should return a function (is a thunk).', () => {
      expect(fetchRule()).to.be.a('function')
    })

    it('Should return a promise from that thunk that gets fulfilled.', () => {
      return fetchRule()(_dispatchSpy, _getStateSpy).should.eventually.be.fulfilled
    })

    it('Should call dispatch and getState exactly once.', () => {
      return fetchRule()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _dispatchSpy.should.have.been.calledOnce
          _getStateSpy.should.have.been.calledOnce
        })
    })

    it('Should produce a state that is double the previous state.', () => {
      _globalState = { rules: {} }

      return fetchRule()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _dispatchSpy.should.have.been.calledOnce
          _getStateSpy.should.have.been.calledOnce
          expect(_globalState.rules.length).to.equal(20)
          return fetchRule()(_dispatchSpy, _getStateSpy)
        })
        .then(() => {
          _dispatchSpy.should.have.been.calledTwice
          _getStateSpy.should.have.been.calledTwice
          expect(_globalState.rules.length).to.equal(20)
        })
    })
  })

  // NOTE: if you have a more complex state, you will probably want to verify
  // that you did not mutate the state. In this case our state is just a number
  // (which cannot be mutated).
  /*describe('(Action Handler) COUNTER_INCREMENT', () => {
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
  })*/
})
