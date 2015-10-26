import React                  from 'react';
import TestUtils              from 'react-addons-test-utils';
import { bindActionCreators } from 'redux';
import { HomeView }           from './HomeView';

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
  let component, rendered, _props, _spies;

  beforeEach(function () {
    _spies = {};
    _props = {
      actions : bindActionCreators({
        increment : (_spies.increment = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    };

    component = shallowRenderWithProps(_props);
    rendered  = renderWithProps(_props);
  });

  it('(Meta) Should have a test that works with Chai expectations.', function () {
    expect(true).to.be.true;
  });

  it('Should render as a <div>.', function () {
    expect(component.type).to.equal('div');
  });

  it('Should include an <h1> with welcome text.', function () {
    const h1 = TestUtils.findRenderedDOMComponentWithTag(rendered, 'h1');

    expect(h1).to.exist;
    expect(h1.textContent).to.match(/Welcome to the React Redux Starter Kit/);
  });

  it('Should render with an <h2> that includes Sample Counter text.', function () {
    const h2 = TestUtils.findRenderedDOMComponentWithTag(rendered, 'h2');

    expect(h2).to.exist;
    expect(h2.textContent).to.match(/Sample Counter/);
  });

  it('Should render props.counter at the end of the sample counter <h2>.', function () {
    const h2 = TestUtils.findRenderedDOMComponentWithTag(
      renderWithProps({ ..._props, counter : 5 }), 'h2'
    );

    expect(h2).to.exist;
    expect(h2.textContent).to.match(/5$/);
  });

  it('Should render an "Increment" button.', function () {
    const btn = TestUtils.findRenderedDOMComponentWithTag(rendered, 'button');

    expect(btn).to.exist;
    expect(btn.textContent).to.match(/Increment/);
  });

  it('Should dispatch an action when "Increment" button is clicked.', function () {
    const btn = TestUtils.findRenderedDOMComponentWithTag(rendered, 'button');

    _spies.dispatch.should.have.not.been.called;
    TestUtils.Simulate.click(btn);
    _spies.dispatch.should.have.been.called;
  });
});
