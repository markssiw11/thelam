import * as types from '../types';
export function loginWithFireBase(data) {
  return {
    type: types.LOGIN_WITH_FIRE_BASE,
    payload: {
      data,
    },
  };
}
export function handleLogInWithFireBase(data) {
  return {
    type: types.HANDLE_LOGIN_WITH_FIRE_BASE,
    payload: {
      data,
    },
  };
}
export function logoutWithFireBase() {
  return {
    type: types.LOGOUT_WITH_FIRE_BASE,
  };
}
export function handleLogoutWithFireBase(data) {
  return {
    type: types.HANDLE_LOGOUT_WITH_FIRE_BASE,
    payload: data,
  };
}

export function handleErrorLogin() {
  return {
    type: types.HANDLE_LOGIN_ERROR,
  };
}
