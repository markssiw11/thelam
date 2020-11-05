import createReducer from '../createReducer';
import Immutable from 'seamless-immutable';
import * as types from '../../action/types';
const INITIAL_STATE = Immutable({
  data: {},
  isLoading: false,
  loginStatus: false,
});
const loginWithFireBase = (state, {payload}) => {
  return state.merge({
    isLoading: true,
  });
};

const handleLoginWithFireBase = (state, {payload = {}}) => {
  const {data} = payload || {};
  return state.merge(
    {
      isLoading: false,
      loginStatus: true,
      data: data?.user?._user,
    },
    {deep: true},
  );
};

const handleLogoutWithFireBase = (state, {payload}) => {
  return state.merge({
    isLoading: false,
    loginStatus: false,
  });
};

const logoutWithFireBase = (state, {payload}) => {
  return state.merge({
    isLoading: true,
  });
};
const handleLoginError = (state, {payload}) => {
  return state.merge({
    isLoading: false,
    error: 'Mật khẩu hoặc tài khoản không đúng',
  });
};
const dismissError = (state, {payload}) => {
  return state.merge({
    error: null,
  });
};
const reducer = createReducer(INITIAL_STATE, {
  [types.LOGIN_WITH_FIRE_BASE]: loginWithFireBase,
  [types.LOGOUT_WITH_FIRE_BASE]: logoutWithFireBase,
  [types.HANDLE_LOGIN_WITH_FIRE_BASE]: handleLoginWithFireBase,
  [types.HANDLE_LOGOUT_WITH_FIRE_BASE]: handleLogoutWithFireBase,
  [types.HANDLE_LOGIN_ERROR]: handleLoginError,
  [types.DISMISS_ERROR]: dismissError,
});
export default reducer;
