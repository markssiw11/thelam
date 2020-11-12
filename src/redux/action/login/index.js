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

export function handleErrorLogin(error) {
  return {
    type: types.HANDLE_LOGIN_ERROR,
    payload: {
      error,
    },
  };
}
export function dismissError() {
  return {
    type: types.DISMISS_ERROR,
  };
}

export function registerWithFireBase(data) {
  return {
    type: types.REGISTER_WITH_FIREBASE,
    payload: {
      data,
    },
  };
}

export function handleRegisterWithFireBase(data) {
  return {
    type: types.HANDLE_REGISTER_WITH_FIREBASE,
    payload: {
      data,
    },
  };
}
