import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import immutablePersistTransform from './helper/immutablePersistTransform';
// import immutablePersistReconciler from './helper/immurablePersistStateReconciler';

import rootReducer from './reducer/reducers';
import rootSaga from '../redux/saga';
export const REDUX_PERSIST_WHITE_LIST = ['login'];
const persistConfig = {
  key: 'root',
  debug: true,
  storage: AsyncStorage,
  whitelist: REDUX_PERSIST_WHITE_LIST,

  transforms: [immutablePersistTransform],
  stateReconciler: hardSet,
};
const logger = createLogger();
const middlewares = [];
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
middlewares.push(logger);
const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);
export default {
  store,
  persistor,
};
