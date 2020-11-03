import {getCourses} from '../../https/api/bookApi';
import {
  call,
  put,
  takeLatest,
  select,
  delay,
  takeEvery,
} from 'redux-saga/effects';
import * as types from '../action/types';
import auth from '@react-native-firebase/auth';
import * as loginAction from '../action/login';
function* loginWithFireBase({payload}) {
  const {data} = payload;
  try {
    const {email, pass} = data;
    console.log('email, pass', email, pass);
    const apiResponse = yield auth().signInWithEmailAndPassword(email, pass);
    yield put(loginAction.handleLogInWithFireBase(apiResponse));
  } catch (error) {
    console.log(
      '%c loginWithFireBase error',
      'color: #ff6347 ; font-weight: bold, ',
      error,
    );
    yield put(loginAction.handleErrorLogin(error));
  }
}
function* logoutWithFireBase(payload) {
  try {
    const apiResponse = yield auth().signOut();
    yield put(loginAction.handleLogoutWithFireBase());
  } catch (error) {
    console.log(
      '%c logoutWithFireBase error',
      'color: #ff6347 ; font-weight: bold, ',
      error,
    );
  }
}

export default function* rootSaga() {
  yield takeEvery(types.LOGIN_WITH_FIRE_BASE, loginWithFireBase);
  yield takeEvery(types.LOGOUT_WITH_FIRE_BASE, logoutWithFireBase);
}
