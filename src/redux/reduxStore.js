import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import immutablePersistTransform from './helper/immutablePersistTransform';
import immutablePersistReconciler from './helper/immurablePersistStateReconciler';

import rootReducer from './reducer/reducers';
import rootSaga from '../redux/saga';
const persistConfig = {
  key: 'root',
  debug: true,
  storage: AsyncStorage,
  transforms: [immutablePersistTransform],
  stateReconciler: immutablePersistReconciler,
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

export const getDispatch = () => store.dispatch;

let persistor = persistStore(store);
export default {
  store,
  persistor,
};
