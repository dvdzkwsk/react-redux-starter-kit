import {
  UPDATE_SEARCH,
  UPDATE_PAGE,
  UPDATE_PER_PAGE,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  REQUEST_RULES,
  RECEIVE_RULES,
  updateSearch,
  updatePage,
  updatePerPage,
  incrementPage,
  decrementPage,
  requestRules,
  receiveRules,
  fetchRules,
  default as rulesReducer
} from 'routes/Rules/modules/rules'

describe('(Redux Module) Rules', () => {
  it('Should export a constant REQUEST_RULES.', () => {
    expect(REQUEST_RULES).to.equal('REQUEST_RULES')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(rulesReducer).to.be.a('function')
    })

    it('Should initialize with a state containing rules.', () => {
      expect(rulesReducer(undefined, {})).to.have.property('rules')
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = rulesReducer(undefined, {})
      const INITIAL_STATE = Object.assign({}, state)

      expect(state).to.deep.equal(INITIAL_STATE)
      state = rulesReducer(state, { type: '@@@@@@@' })
      expect(state).to.deep.equal(INITIAL_STATE)
      state = rulesReducer(state, updatePage(5))
      expect(state.page).to.equal(5)
      state = rulesReducer(state, { type: '@@@@@@@' })
      expect(state.page).to.equal(5)
    })
  })

  describe('(Action Creator) requestRules', () => {
    it('Should be exported as a function.', () => {
      expect(requestRules).to.be.a('function')
    })

    it('Should return an action with type "REQUEST_RULES".', () => {
      expect(requestRules()).to.have.property('type', REQUEST_RULES)
    })
  })

  describe('(Action Creator) updateSearch', () => {
    it('Should be exported as a function.', () => {
      expect(updateSearch).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_SEARCH".', () => {
      expect(updateSearch()).to.have.property('type', UPDATE_SEARCH)
    })

    it('Should assign the first argument to the "search" property.', () => {
      expect(updateSearch('test')).to.have.property('search', 'test')
    })

    it('Should have the "search" property if not provided.', () => {
      expect(updateSearch()).to.have.property('search')
    })
  })

  describe('(Action Creator) updatePage', () => {
    it('Should be exported as a function.', () => {
      expect(updatePage).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_PAGE".', () => {
      expect(updatePage()).to.have.property('type', UPDATE_PAGE)
    })

    it('Should assign the first argument to the "page" property.', () => {
      expect(updatePage(5)).to.have.property('page', 5)
    })

    it('Should have the "page" property if not provided.', () => {
      expect(updatePage()).to.have.property('page')
    })
  })

  describe('(Action Creator) updatePerPage', () => {
    it('Should be exported as a function.', () => {
      expect(updatePerPage).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_PER_PAGE".', () => {
      expect(updatePerPage()).to.have.property('type', UPDATE_PER_PAGE)
    })

    it('Should assign the first argument to the "perpage" property.', () => {
      expect(updatePerPage(20)).to.have.property('perpage', 20)
    })

    it('Should have the "perpage" property if not provided.', () => {
      expect(updatePerPage()).to.have.property('perpage')
    })
  })

  describe('(Action Creator) decrementPage', () => {
    it('Should be exported as a function.', () => {
      expect(decrementPage).to.be.a('function')
    })

    it('Should return an action with type "INCREMENT_PAGE".', () => {
      expect(decrementPage()).to.have.property('type', DECREMENT_PAGE)
    })

    it('Should decrease the current page number by 1', () => {

    })
  })

  describe('(Action Creator) incrementPage', () => {
    it('Should be exported as a function.', () => {
      expect(incrementPage).to.be.a('function')
    })

    it('Should return an action with type "INCREMENT_PAGE".', () => {
      expect(incrementPage()).to.have.property('type', INCREMENT_PAGE)
    })

    it('Should increase the current page number by 1', () => {

    })
  })

  describe('(Action Creator) receiveRules', () => {
    it('Should be exported as a function.', () => {
      expect(receiveRules).to.be.a('function')
    })

    it('Should return an action with type "RECEIVE_RULES".', () => {
      expect(receiveRules()).to.have.property('type', RECEIVE_RULES)
    })

    it('Should assign the first argument to the "payload" property.', () => {
      const payload = { rules: [] }

      expect(receiveRules(payload)).to.have.property('payload', payload)
    })

    it('Should have the "payload" property if not provided.', () => {
      expect(receiveRules()).to.have.property('payload')
    })
  })

  describe('(Action Creator) fetchRules', () => {
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
  })

  // NOTE: if you have a more complex state, you will probably want to verify
  // that you did not mutate the state. In this case our state is just a number
  // (which cannot be mutated).
  /* describe('(Action Handler) COUNTER_INCREMENT', () => {
    it('Should increment the state by the action payload\'s "value" property.', () => {
      let state = rulesReducer(undefined, {})
      expect(state).to.equal(0)
      state = rulesReducer(state, increment(1))
      expect(state).to.equal(1)
      state = rulesReducer(state, increment(2))
      expect(state).to.equal(3)
      state = rulesReducer(state, increment(-3))
      expect(state).to.equal(0)
    })
  }) */
})
