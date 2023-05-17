import { ACTION_TYPE } from './action';

function authUserReducer(authUser = null, action = {}) {
  switch (action.type) {
    case ACTION_TYPE.SET_AUTH_USER:
      return action.payload.authUser;
    case ACTION_TYPE.UNSET_AUTH_USER:
      return null;
    default:
      return authUser;
  }
}

export default authUserReducer;
