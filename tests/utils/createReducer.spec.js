import * as sinon from 'sinon'
import { createReducer } from 'utils'

describe('utils', () => {
  let presentSpy
  const initialState = { initial: 'state' }
  const presentAction = { type: 'PRESENT' }
  const newState = 'new state'

  beforeEach(() => {
    presentSpy = sinon.spy((state, action) => newState)
  })

  it('should return a function', () => {
    expect(createReducer()).to.be.a('function')
  })

  it('should return an initial state if there is no matching action on handlers', () => {
    const actionHandlers = { PRESENT: presentSpy }
    expect(createReducer(initialState, actionHandlers)(undefined, { type: 'NOT_PRESENT' }))
      .to.deep.equal(initialState)
    expect(presentSpy).not.to.have.been.called
  })

  it('should call the handler located under the key at action.type', () => {
    const actionHandlers = { PRESENT: presentSpy }
    expect(createReducer(initialState, actionHandlers)(undefined, presentAction))
      .to.deep.equal(newState)
    expect(presentSpy).to.have.been.calledOnce
      .and.to.have.been.calledWith(initialState, presentAction)
  })

  it('should call the handler with updated state if it has already been called once', () => {
    const actionHandlers = { PRESENT: presentSpy }
    const reducer = createReducer(initialState, actionHandlers)
    const firstState = reducer(undefined, presentAction)
    reducer(firstState, presentAction)
    expect(presentSpy).to.have.been.calledTwice
      .and.to.have.been.calledWith(initialState, presentAction)
      .and.to.have.been.calledWith(newState, presentAction)
  })
})

