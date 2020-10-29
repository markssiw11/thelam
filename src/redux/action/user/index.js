import * as types from '../types';
export function registerUser(data) {
  console.log('data======', data);
  return {
    type: types.REGISTER_USER,
    data,
  };
}
