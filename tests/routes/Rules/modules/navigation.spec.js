import Immutable from 'immutable'
import {
  UPDATE_SEARCH,
  UPDATE_PAGE,
  UPDATE_PER_PAGE,
  updateSearch,
  updatePage,
  updatePerPage,
  default as navigationReducer
} from 'routes/Rules/modules/navigation'

describe('(Redux Module) Navigation', () => {
  it('Should export a constant UPDATE_SEARCH.', () => {
    expect(UPDATE_SEARCH).to.equal('UPDATE_SEARCH')
  })

  it('Should export a constant UPDATE_PAGE.', () => {
    expect(UPDATE_PAGE).to.equal('UPDATE_PAGE')
  })

  it('Should export a constant UPDATE_PER_PAGE.', () => {
    expect(UPDATE_PER_PAGE).to.equal('UPDATE_PER_PAGE')
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
      state = navigationReducer(state, updatePage(5))
      expect(state.get('page')).to.equal(5)
      state = navigationReducer(state, { type: '@@@@@@@' })
      expect(state.get('page')).to.equal(5)
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
})
