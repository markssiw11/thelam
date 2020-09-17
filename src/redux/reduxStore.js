import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './reducer/reducers';

const persistConfig = {
  key: 'root',
  // debug: true,
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer);
export const getDispatch = () => store.dispatch;

let persistor = persistStore(store);
export default {
  store,
  persistor,
};
