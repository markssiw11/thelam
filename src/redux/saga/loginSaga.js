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

function* loginWithFireBase(payload) {
  const {data} = payload;
  try {
    const {email, pass} = data;
    const apiResponse = yield auth().createUserWithEmailAndPassword(
      email,
      pass,
    );

    console.log('api======', apiResponse);
  } catch (error) {
    console.log(
      '%c loginWithFireBase error',
      'color: #ff6347 ; font-weight: bold, ',
      error,
    );
  }
}

export default function* rootSaga() {
  yield takeEvery(types.LOGIN_WITH_FIRE_BASE, loginWithFireBase);
}
