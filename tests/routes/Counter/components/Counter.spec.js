import React from 'react'
import { bindActionCreators } from 'redux'
import { Counter } from 'routes/Counter/components/Counter'
import { shallow } from 'enzyme'

describe('(Component) Counter', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {
      counter : 5,
      ...bindActionCreators({
        doubleAsync : (_spies.doubleAsync = sinon.spy()),
        increment   : (_spies.increment = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<Counter {..._props} />)
  })

  it('renders as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  it('renders with an <h2> that includes Counter label.', () => {
    expect(_wrapper.find('h2').text()).to.match(/Counter:/)
  })

  it('renders {props.counter} at the end of the sample counter <h2>.', () => {
    expect(_wrapper.find('h2').text()).to.match(/5$/)
    _wrapper.setProps({ counter: 8 })
    expect(_wrapper.find('h2').text()).to.match(/8$/)
  })

  it('renders exactly two buttons.', () => {
    expect(_wrapper.find('button')).to.have.length(2)
  })

  describe('Increment', () => {
    let _button

    beforeEach(() => {
      _button = _wrapper.find('button').filterWhere(a => a.text() === 'Increment')
    })

    it('exists', () => {
      expect(_button).to.exist()
    })

    it('is a primary button', () => {
      expect(_button.hasClass('btn btn-primary')).to.be.true()
    })

    it('Calls props.increment when clicked', () => {
      _spies.dispatch.should.have.not.been.called()

      _button.simulate('click')

      _spies.dispatch.should.have.been.called()
      _spies.increment.should.have.been.called()
    })
  })

  describe('Double Async Button', () => {
    let _button

    beforeEach(() => {
      _button = _wrapper.find('button').filterWhere(a => a.text() === 'Double (Async)')
    })

    it('exists', () => {
      expect(_button).to.exist()
    })

    it('is a secondary button', () => {
      expect(_button.hasClass('btn btn-secondary')).to.be.true()
    })

    it('Calls props.doubleAsync when clicked', () => {
      _spies.dispatch.should.have.not.been.called()

      _button.simulate('click')

      _spies.dispatch.should.have.been.called()
      _spies.doubleAsync.should.have.been.called()
    })
  })
})
