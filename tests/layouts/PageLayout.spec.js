import React from 'react'
import PageLayout from 'layouts/PageLayout/PageLayout'
import { shallow } from 'enzyme'

describe('(Layout) PageLayout', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<PageLayout />)
    expect(wrapper.is('div')).toBe(true)
  })

  it('renders a project title', () => {
    const wrapper = shallow(<PageLayout />)
    expect(wrapper.find('h1').text()).toBe('React Redux Starter Kit')
  })

  it('renders its children inside of the viewport', () => {
    const Child = () => <h2>child</h2>
    const wrapper = shallow(
      <PageLayout>
        <Child />
      </PageLayout>
    )

    const childWrapper = wrapper.find('.page-layout__viewport').find('Child')
    expect(childWrapper.length).toBeGreaterThan(0)
  })
})
