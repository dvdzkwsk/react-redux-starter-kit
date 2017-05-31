import React from 'react'
import { Counter } from 'routes/Counter/components/Counter'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const component = <Counter counter={2} increment={jest.fn()} doubleAsync={jest.fn()} />
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})
