import HomeRoute from 'src/routes/Home';

import test from 'ava';

test('my passing test', t => {
  t.pass();
});

let _component;

test.beforeEach(() => {
  _component = HomeRoute.component();
});

test('Should return a route configuration object', t => {
  t.is(typeof HomeRoute, 'object');
});

test('Should define a route component', t => {
  t.is(_component.type, 'div');
});
