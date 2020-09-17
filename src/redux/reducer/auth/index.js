// AuthReducer.js
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

const INITIAL_STATE = {
  currentUser: null,
  isLoggingIn: false,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  // reducer implementation
};

const persistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['isLoggingIn'],
};

export default persistReducer(persistConfig, AuthReducer);
