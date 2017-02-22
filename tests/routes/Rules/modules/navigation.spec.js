import Immutable from 'immutable'
import {
  UPDATE_SEARCH,
  updateSearch,
  default as navigationReducer
} from 'routes/Rules/modules/navigation'

describe('(Redux Module) Navigation', () => {
  it('Should export a constant UPDATE_SEARCH.', () => {
    expect(UPDATE_SEARCH).to.equal('UPDATE_SEARCH')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(navigationReducer).to.be.a('function')
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = navigationReducer(undefined, {})
      const INITIAL_STATE = Immutable.fromJS({
        search: undefined,
        page: 1,
        perpage: 20,
        maxpage: undefined,
        rules: []
      })

      expect(state).to.deep.equal(INITIAL_STATE)
      state = navigationReducer(state, { type: '@@@@@@@' })
      expect(state).to.deep.equal(INITIAL_STATE)
      state = navigationReducer(state, updateSearch('test'))
      expect(state.get('search')).to.equal('test')
      state = navigationReducer(state, { type: '@@@@@@@' })
      expect(state.get('search')).to.equal('test')
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
})
