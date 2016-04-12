import React from 'react'
import { Header } from 'components/Header/Header'
import { IndexLink, Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header/>)
  })

  it('Renders a welcome message', () => {
    const welcome = _wrapper.find('h1')
    expect(welcome).to.exist
    expect(welcome.text()).to.match(/React Redux Starter Kit/)
  })

  describe('Navigation links...', () => {

    it('Should render an IndexLink to Home route', () => {
      expect(_wrapper.contains(<IndexLink to='/'/>)).to.equal.true
    })

    it('Should render an Link to Counter route)', () => {
      expect(_wrapper.contains(<Link to='/counter'/>)).to.equal.true
    })

  })
})
