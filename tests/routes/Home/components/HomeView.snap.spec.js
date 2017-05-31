import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const component = <HomeView />
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})
