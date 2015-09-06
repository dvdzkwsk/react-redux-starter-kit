import React        from 'react';
import TestUtils    from 'react-addons-test-utils';
import TodoList from './TodoList.jsx';

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<TodoList {...props} />);
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<TodoList {...props} />)
}

describe('(View) Home', function () {
  let rendered, props;

  beforeEach(function () {
    const todos = [];
    const toggleCompleteTodo = sinon.spy();
    const destroyTodo = sinon.spy();
    props = {todos: todos, toggleCompleteTodo: toggleCompleteTodo, destroyTodo: destroyTodo};
    rendered  = renderWithProps(props);
  });

  it('(Meta) Should have a test that works with Chai expectations.', function () {
    expect(true).to.be.true;
  });
  it('Should include text.', function () {
    const h3 = TestUtils.findRenderedDOMComponentWithTag(rendered, 'h3');
    expect(h3).to.exist;
    expect(h3.textContent).to.match(/Stuff that you should do. Maybe, I guess./);
  });
  it('Should include text if no todos.', function () {
    const p = TestUtils.findRenderedDOMComponentWithTag(rendered, 'p');
    expect(p).to.exist;
    expect(p.textContent).to.match(/I'm sure you have something you need to do!/);
  });
  it('Should create a list of todos', function () {
    props.todos = [ {}, {} ];
    const lis = TestUtils.scryRenderedDOMComponentsWithTag(renderWithProps(props), 'li');
    expect(lis).to.exist;
    expect(lis).to.have.length(2);
  });
});
