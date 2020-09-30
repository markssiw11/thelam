import {getCourses} from '../../https/api/bookApi';
import {
  call,
  put,
  takeLatest,
  select,
  delay,
  takeEvery,
} from 'redux-saga/effects';

function* getHomeSaga({payload}) {
  try {
    console.log('payload=======', payload);
    const apiRespone = yield call(getCourses);
    console.log('apiRespone========', apiRespone);
  } catch (error) {
    console.log('error======', error);
  }
}

export default function* rootSaga() {
  yield takeEvery('HOME_ACTION', getHomeSaga);
}
