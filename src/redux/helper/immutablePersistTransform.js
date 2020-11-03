import R from 'ramda';
import Immutable from 'seamless-immutable';
import {createTransform} from 'redux-persist';
const REDUX_PERSIST_WHITE_LIST = ['login'];
// is this object already Immutable?
const isImmutable = R.has('asMutable');

// change this Immutable object into a JS object
const convertToJs = (state) => state.asMutable({deep: true});

// optionally convert this object into a JS object if it is Immutable
const fromImmutable = R.when(isImmutable, convertToJs);

// convert this JS object into an Immutable object
const toImmutable = (raw) => Immutable(raw);

const setTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState, key) => {
    return fromImmutable(inboundState);
  },
  // transform state being rehydrated
  (outboundState, key) => {
    return toImmutable(outboundState);
  },
  {
    whitelist: REDUX_PERSIST_WHITE_LIST,
  },
);

export default setTransform;
