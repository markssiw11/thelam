import createReducer from '../createReducer';
import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  data: null,
  isLoading: false,
});
const getHomeInfo = (state, {payload}) => {
  return state.merge({
    isLoading: false,
  });
};
const reducer = createReducer(INITIAL_STATE, {
  ['HOME_ACTION']: getHomeInfo,
});
export default reducer;
