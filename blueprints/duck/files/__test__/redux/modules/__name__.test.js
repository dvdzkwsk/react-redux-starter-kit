import reducer, { defaultState } from 'redux/modules/<%= pascalEntityName %>';
import deepFreeze from 'deep-freeze';

describe('(Redux) <%= pascalEntityName %>', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});
