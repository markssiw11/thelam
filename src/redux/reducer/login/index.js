import createReducer from '../createReducer';
import Immutable from 'seamless-immutable';
import * as types from '../../action/types';
const INITIAL_STATE = Immutable({
  data: null,
  isLoading: false,
  loginStatus: false,
});
const loginWithFireBase = (state, {payload}) => {
  return state.merge({
    isLoading: false,
  });
};
const reducer = createReducer(INITIAL_STATE, {
  [types.LOGIN_WITH_FIRE_BASE]: loginWithFireBase,
});
export default reducer;
