import React from 'react'
import { Header } from 'components/Header/Header'
import { IndexLink, Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header />)
  })

  /*it('Renders a product title', () => {
    const title = _wrapper.find('.navbar-brand')
    expect(title).to.exist
    expect(title.text()).to.match(/Ad Director/)
  })*/

  describe('Navigation links...', () => {
    it('Should render a Link to Home route', () => {
      expect(_wrapper.contains(
        <IndexLink to='/' className='navbar-brand' activeClassName='active'>
          Ad Director
        </IndexLink>
      )).to.be.true
    })

    it('Should render a Link to New Rule route', () => {
      expect(_wrapper.contains(
        <Link to='/rule/new' activeClassName='active'>
          Create Rule
        </Link>
      )).to.be.true
    })

    it('Should render a Link to Rules route', () => {
      expect(_wrapper.contains(
        <Link to='/rules' activeClassName='active'>
          View / Edit Rules
        </Link>
      )).to.be.true
    })
  })
})
