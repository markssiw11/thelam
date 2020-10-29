import * as types from '../action/types';
import {registerUserApi} from '../../https/api/userApi';
import {
  call,
  put,
  takeLatest,
  select,
  delay,
  takeEvery,
} from 'redux-saga/effects';

function* registerUser(payload) {
  try {
    const {data} = payload;
    const apiResponse = yield call(registerUserApi, data);
  } catch (error) {
    console.log('error======', error);
  }
}

export default function* rootSaga() {
  yield takeEvery(types.REGISTER_USER, registerUser);
}
