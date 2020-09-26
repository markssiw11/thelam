import R from 'ramda';
import Immutable from 'seamless-immutable';

// is this object already Immutable?
const isImmutable = R.has('asMutable');

// change this Immutable object into a JS object
const convertToJs = (state) => state.asMutable({deep: true});

// optionally convert this object into a JS object if it is Immutable
const fromImmutable = R.when(isImmutable, convertToJs);

// convert this JS object into an Immutable object
const toImmutable = (raw) => Immutable(raw);

const seamlessImmutableReconciler = (
  inboundState,
  originalState,
  reducedState,
  {debug, mergeDeep = false},
) => {
  let newState = {...reducedState};
  // only rehydrate if inboundState exists and is an object
  if (inboundState && typeof inboundState === 'object') {
    Object.keys(inboundState).forEach((key) => {
      // ignore _persist data
      if (key === '_persist') return;

      // if reducer modifies substate, skip auto rehydration
      if (originalState[key] !== reducedState[key]) {
        console.log(
          'redux-persist/stateReconciler: sub state for key `%s` modified, skipping.',
          key,
        );

        return;
      }
      if (isPlainEnoughObject(reducedState[key])) {
        // if object is plain enough shallow merge the new values (hence "Level2")
        newState[key] = {...newState[key], ...inboundState[key]};
        return;
      } else if (isImmutable(reducedState[key])) {
        // if this is a seamless-immutable state slice and object use its own merge function
        if (isObject(newState[key])) {
          newState[key] = newState[key].merge(inboundState[key], {
            deep: mergeDeep,
          });
        } else {
          // otherwise use seamless-immutable
          newState[key] = toImmutable(inboundState[key]);
        }
        return;
      }
      // otherwise hard set
      newState[key] = inboundState[key];
    });
  }

  if (inboundState && typeof inboundState === 'object') {
    console.log(
      `redux-persist/stateReconciler: rehydrated keys '${Object.keys(
        inboundState,
      ).join(', ')}'`,
    );
  }

  return newState;
};

function isObject(o) {
  return o !== null && !Array.isArray(o) && typeof o === 'object';
}

function isPlainEnoughObject(o) {
  return (
    o !== null && !Array.isArray(o) && typeof o === 'object' && !isImmutable(o)
  );
}

export default seamlessImmutableReconciler;
