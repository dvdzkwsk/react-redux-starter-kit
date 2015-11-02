import { createReducer }     from '../utils';
import { COUNTER_INCREMENT } from 'constants/counter';

const initialState = 0;
export default createReducer(initialState, {
  [COUNTER_INCREMENT] : (state) => state + 1
});
