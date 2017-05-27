import {
  COUNTER_INCREMENT,
  increment,
  doubleAsync,
  default as counterReducer
} from 'routes/Counter/modules/counter'

describe('(Redux Module) Counter', () => {
  it('Should export a constant COUNTER_INCREMENT.', () => {
    expect(COUNTER_INCREMENT).toBe('COUNTER_INCREMENT')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(typeof counterReducer).toBe('function')
    })

    it('Should initialize with a state of 0 (Number).', () => {
      expect(counterReducer(undefined, {})).toBe(0)
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = counterReducer(undefined, {})
      expect(state).toBe(0)
      state = counterReducer(state, { type: '@@@@@@@' })
      expect(state).toBe(0)
      state = counterReducer(state, increment(5))
      expect(state).toBe(5)
      state = counterReducer(state, { type: '@@@@@@@' })
      expect(state).toBe(5)
    })
  })

  describe('(Action Creator) increment', () => {
    it('Should be exported as a function.', () => {
      expect(typeof increment).toBe('function')
    })

    it('Should return an action with type "COUNTER_INCREMENT".', () => {
      expect(increment()).toHaveProperty('type', COUNTER_INCREMENT)
    })

    it('Should assign the first argument to the "payload" property.', () => {
      expect(increment(5)).toHaveProperty('payload', 5)
    })

    it('Should default the "payload" property to 1 if not provided.', () => {
      expect(increment()).toHaveProperty('payload', 1)
    })
  })

  describe('(Action Creator) doubleAsync', () => {
    let _globalState
    let _dispatchSpy
    let _getStateSpy

    beforeEach(() => {
      _globalState = {
        counter : counterReducer(undefined, {})
      }
      _dispatchSpy = jest.fn((action) => {
        _globalState = {
          ..._globalState,
          counter : counterReducer(_globalState.counter, action)
        }
      })
      _getStateSpy = jest.fn(() => {
        return _globalState
      })
    })

    it('Should be exported as a function.', () => {
      expect(typeof doubleAsync).toBe('function')
    })

    it('Should return a function (is a thunk).', () => {
      expect(typeof doubleAsync()).toBe('function')
    })

    it('Should return a promise from that thunk that gets fulfilled.', () => {
      expect.assertions(1)
      const doubleAsyncPromise = doubleAsync()(_dispatchSpy, _getStateSpy)
      return expect(doubleAsyncPromise).resolves.toBe(undefined)
    })

    it('Should call dispatch and getState exactly once.', () => {
      return doubleAsync()(_dispatchSpy, _getStateSpy)
        .then(() => {
          expect(_dispatchSpy).toHaveBeenCalledTimes(1)
          expect(_getStateSpy).toHaveBeenCalledTimes(1)
        })
    })

    it('Should produce a state that is double the previous state.', () => {
      _globalState = { counter: 2 }

      return doubleAsync()(_dispatchSpy, _getStateSpy)
        .then(() => {
          expect(_dispatchSpy).toHaveBeenCalledTimes(1)
          expect(_getStateSpy).toHaveBeenCalledTimes(1)
          expect(_globalState.counter).toBe(4)
          return doubleAsync()(_dispatchSpy, _getStateSpy)
        })
        .then(() => {
          expect(_dispatchSpy).toHaveBeenCalledTimes(2)
          expect(_getStateSpy).toHaveBeenCalledTimes(2)
          expect(_globalState.counter).toBe(8)
        })
    })
  })

  // NOTE: if you have a more complex state, you will probably want to verify
  // that you did not mutate the state. In this case our state is just a number
  // (which cannot be mutated).
  describe('(Action Handler) COUNTER_INCREMENT', () => {
    it('Should increment the state by the action payload\'s "value" property.', () => {
      let state = counterReducer(undefined, {})
      expect(state).toBe(0)
      state = counterReducer(state, increment(1))
      expect(state).toBe(1)
      state = counterReducer(state, increment(2))
      expect(state).toBe(3)
      state = counterReducer(state, increment(-3))
      expect(state).toBe(0)
    })
  })
})
