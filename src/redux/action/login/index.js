import * as types from '../types';
export function loginWithFireBase(data) {
  return {
    type: types.LOGIN_WITH_FIRE_BASE,
    data,
  };
}
