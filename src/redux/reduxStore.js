import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import immutablePersistTransform from './helper/immutablePersistTransform';
import immutablePersistReconciler from './helper/immurablePersistStateReconciler';

import rootReducer from './reducer/reducers';

const persistConfig = {
  key: 'root',
  debug: true,
  storage: AsyncStorage,
  transforms: [immutablePersistTransform],
  stateReconciler: immutablePersistReconciler,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer);
export const getDispatch = () => store.dispatch;

let persistor = persistStore(store);
export default {
  store,
  persistor,
};
