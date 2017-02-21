import Immutable from 'immutable'
import {
  REQUEST_RULES,
  RECEIVE_RULES,
  REQUEST_DELETE_RULE,
  RECEIVE_DELETE_RULE,
  fetchRules,
  deleteRule,
  default as rulesReducer
} from 'routes/Rules/modules/rules'

describe('(Redux Module) Rules', () => {
  it('Should export a constant REQUEST_RULES.', () => {
    expect(REQUEST_RULES).to.equal('REQUEST_RULES')
  })

  it('Should export a constant RECEIVE_RULES.', () => {
    expect(RECEIVE_RULES).to.equal('RECEIVE_RULES')
  })

  it('Should export a constant REQUEST_DELETE_RULE.', () => {
    expect(REQUEST_DELETE_RULE).to.equal('REQUEST_DELETE_RULE')
  })

  it('Should export a constant RECEIVE_DELETE_RULE.', () => {
    expect(RECEIVE_DELETE_RULE).to.equal('RECEIVE_DELETE_RULE')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(rulesReducer).to.be.a('function')
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = rulesReducer(undefined, {})
      const INITIAL_STATE = Immutable.fromJS({})

      expect(state).to.deep.equal(INITIAL_STATE)
      state = rulesReducer(state, { type: '@@@@@@@' })
      expect(state).to.deep.equal(INITIAL_STATE)
      state = rulesReducer(state, updatePage(5))
      expect(state.get('page')).to.equal(5)
      state = rulesReducer(state, { type: '@@@@@@@' })
      expect(state.get('page')).to.equal(5)
    })
  })

  /* describe('(Action Creator) fetchRules', () => {
    let _globalState
    let _dispatchSpy
    let _getStateSpy

    beforeEach(() => {
      _globalState = {
        rules : rulesReducer(undefined, {})
      }
      _dispatchSpy = sinon.spy((action) => {
        _globalState = {
          ..._globalState,
          rules : rulesReducer(_globalState.rules, action)
        }
      })
      _getStateSpy = sinon.spy(() => {
        return _globalState
      })
    })

    it('Should be exported as a function.', () => {
      expect(fetchRules).to.be.a('function')
    })

    it('Should return a function (is a thunk).', () => {
      expect(fetchRules()).to.be.a('function')
    })

    it('Should return a promise from that thunk that gets fulfilled.', () => {
      return fetchRules()(_dispatchSpy, _getStateSpy).should.eventually.be.fulfilled
    })

    it('Should call dispatch and getState exactly once.', () => {
      return fetchRules()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _dispatchSpy.should.have.been.calledOnce
          _getStateSpy.should.have.been.calledOnce
        })
    })

    it('Should produce a state that is double the previous state.', () => {
      _globalState = { rules: {} }

      return fetchRules()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _dispatchSpy.should.have.been.calledOnce
          _getStateSpy.should.have.been.calledOnce
          expect(_globalState.rules.length).to.equal(20)
          return fetchRules()(_dispatchSpy, _getStateSpy)
        })
        .then(() => {
          _dispatchSpy.should.have.been.calledTwice
          _getStateSpy.should.have.been.calledTwice
          expect(_globalState.rules.length).to.equal(20)
        })
    })
  }) */

  // TODO test deleteRule
})
