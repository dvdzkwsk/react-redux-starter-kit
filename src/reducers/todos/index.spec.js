import todos from './index';

const reducer = ((_state) => ({
  reset : () => _state = todos(undefined, {}),
  run   : (action) => _state = todos(_state, action),
  getState : () => _state
}))();

describe('(Reducer) Todos', function () {

  beforeEach(function () {
    reducer.reset();
  });

  describe('Initial State', function () {

    it('Should initialize with 2 sample TODO items.', function () {
      expect(reducer.getState().size).to.equal(2);
    });

  });

  // more tests here...
});
