import React from 'react'
import PageLayout from 'layouts/PageLayout/PageLayout'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<PageLayout />).toJSON()
  expect(tree).toMatchSnapshot()
})
