import createReducer from '../createReducer';

const INITIAL_STATE = {
  data: null,
};
const getHomeInfo = (state, {payload}) => {
  return state.merge({
    isLoading: false,
  });
};
const reducer = createReducer(INITIAL_STATE, {
  ['HOME_ACTION']: getHomeInfo,
});
export default reducer;
