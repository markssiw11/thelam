import {all} from 'redux-saga/effects';
import homeSaga from './homeSaga';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
export default function* rootSaga() {
  yield all([homeSaga(), userSaga(), loginSaga()]);
}
