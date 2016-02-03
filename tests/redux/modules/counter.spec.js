import {
  COUNTER_INCREMENT,
  increment,
  doubleAsync,
  default as counterReducer
} from 'redux/modules/counter'

describe('(Redux Module) Counter', function () {
  it('Should export a constant COUNTER_INCREMENT.', function () {
    expect(COUNTER_INCREMENT).to.equal('COUNTER_INCREMENT')
  })

  describe('(Reducer)', function () {
    it('Should be a function.', function () {
      expect(counterReducer).to.be.a('function')
    })

    it('Should initialize with a state of 0 (Number).', function () {
      expect(counterReducer(undefined, {})).to.equal(0)
    })

    it('Should return the previous state if an action was not matched.', function () {
      let state = counterReducer(undefined, {})
      expect(state).to.equal(0)
      state = counterReducer(state, {type: '@@@@@@@'})
      expect(state).to.equal(0)
      state = counterReducer(state, increment(5))
      expect(state).to.equal(5)
      state = counterReducer(state, {type: '@@@@@@@'})
      expect(state).to.equal(5)
    })
  })

  describe('(Action Creator) increment', function () {
    it('Should be exported as a function.', function () {
      expect(increment).to.be.a('function')
    })

    it('Should return an action with type "COUNTER_INCREMENT".', function () {
      expect(increment()).to.have.property('type', COUNTER_INCREMENT)
    })

    it('Should assign the first argument to the "payload" property.', function () {
      expect(increment(5)).to.have.property('payload', 5)
    })

    it('Should default the "payload" property to 1 if not provided.', function () {
      expect(increment()).to.have.property('payload', 1)
    })
  })

  describe('(Action Creator) doubleAsync', function () {
    let _globalState
    let _dispatchSpy
    let _getStateSpy

    beforeEach(function () {
      _globalState = {
        counter: counterReducer(undefined, {})
      }
      _dispatchSpy = sinon.spy((action) => {
        _globalState = {
          ..._globalState,
          counter: counterReducer(_globalState.counter, action)
        }
      })
      _getStateSpy = sinon.spy(() => {
        return _globalState
      })
    })

    it('Should be exported as a function.', function () {
      expect(doubleAsync).to.be.a('function')
    })

    it('Should return a function (is a thunk).', function () {
      expect(doubleAsync()).to.be.a('function')
    })

    it('Should return a promise from that thunk that gets fulfilled.', function () {
      return doubleAsync()(_dispatchSpy, _getStateSpy).should.eventually.be.fulfilled
    })

    it('Should call dispatch and getState exactly once.', function () {
      return doubleAsync()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _dispatchSpy.should.have.been.calledOnce
          _getStateSpy.should.have.been.calledOnce
        })
    })

    it('Should produce a state that is double the previous state.', function () {
      _globalState = { counter: 2 }

      return doubleAsync()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _dispatchSpy.should.have.been.calledOnce
          _getStateSpy.should.have.been.calledOnce
          expect(_globalState.counter).to.equal(4)
          return doubleAsync()(_dispatchSpy, _getStateSpy)
        })
        .then(() => {
          _dispatchSpy.should.have.been.calledTwice
          _getStateSpy.should.have.been.calledTwice
          expect(_globalState.counter).to.equal(8)
        })
    })
  })

  // NOTE: if you have a more complex state, you will probably want to verify
  // that you did not mutate the state. In this case our state is just a number
  // (which cannot be mutated).
  describe('(Action Handler) COUNTER_INCREMENT', function () {
    it('Should increment the state by the action payload\'s "value" property.', function () {
      let state = counterReducer(undefined, {})
      expect(state).to.equal(0)
      state = counterReducer(state, increment(1))
      expect(state).to.equal(1)
      state = counterReducer(state, increment(2))
      expect(state).to.equal(3)
      state = counterReducer(state, increment(-3))
      expect(state).to.equal(0)
    })
  })
})
