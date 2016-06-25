import React from 'react'
import <%= pascalEntityName %>Container from '<%= importSmartPath %>/<%= pascalEntityName %>Container'
import { render } from 'enzyme'

describe('(View) <%= pascalEntityName %>', () => {
  let _component

  beforeEach(() => {
    _component = render(<<%= pascalEntityName %>Container />)
  })

  it('Component exist', () => {
    expect(_component).to.exist
  })
})
