import { ACTION_TYPE } from './action';

function isPreloadReducer(isPreLoad = true, action = {}) {
  switch (action.type) {
    case ACTION_TYPE.SET_IS_PRELOAD:
      return action.payload.isPreLoad;
    default:
      return isPreLoad;
  }
}

export default isPreloadReducer;
