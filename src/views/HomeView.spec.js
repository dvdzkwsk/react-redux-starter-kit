import React        from 'react';
import TestUtils    from 'react-addons-test-utils';
import { HomeView } from './HomeView';
import Immutable from 'immutable';

function shallowRender (component) {
  const renderer = TestUtils.createRenderer();

  renderer.render(component);
  return renderer.getRenderOutput();
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<HomeView {...props} />);
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<HomeView {...props} />)
}

describe('(View) Home', function () {
  let component, rendered;

  beforeEach(function () {
    const createTodoItem = (copy) => Immutable.Map({
      copy     : copy,
      complete : false
    });
    const todos = Immutable.List([
      'Read the docs',
      'Build something cool'
    ].map(createTodoItem));
    const props = {todos: todos};
    component = shallowRenderWithProps(props);
    rendered  = renderWithProps(props);
  });

  it('(Meta) Should have a test that works with Chai expectations.', function () {
    expect(true).to.be.true;
  });


});
