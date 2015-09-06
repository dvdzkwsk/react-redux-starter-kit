import React        from 'react';
import TestUtils    from 'react-addons-test-utils';
import TodoItem from './TodoItem.jsx';

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<TodoItem {...props} />);
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<TodoItem {...props} />)
}

describe('(View) Home', function () {
  let rendered, toggle, props;

  beforeEach(function () {
    const todo = {
      copy     : 'Read the docs',
      complete : false
    };
    toggle = sinon.spy();
    const destroy = sinon.spy();
    props = {todo: todo, toggle: toggle, destroy: destroy};
    rendered  = renderWithProps(props);
  });

  it('(Meta) Should have a test that works with Chai expectations.', function () {
    expect(true).to.be.true;
  });
  it('Should include text.', function () {
    const div = TestUtils.findRenderedDOMComponentWithTag(rendered, 'div');
    expect(div).to.exist;
    expect(div.textContent).to.match(/Read the docs/);
  });
  it('Should call toggle on click', function () {
    const div = TestUtils.findRenderedDOMComponentWithTag(rendered, 'div');
    toggle.should.have.not.been.called;
    TestUtils.Simulate.click(div);
    toggle.should.have.been.called;
  });
  it('Should not display ok on not complete', function () {
    let spans = TestUtils.scryRenderedDOMComponentsWithTag(rendered, 'span');
    expect(spans).to.be.empty;
  });
  it('Should display ok on complete', function () {
    props.todo.complete = true;
    let span = TestUtils.findRenderedDOMComponentWithTag(renderWithProps(props), 'span');
    expect(span).to.exist;
  });
});
