import { ACTION_TYPE } from './action';

function userReducer(users = [], action = {}) {
  switch (action.type) {
    case ACTION_TYPE.RECEIVE_USER:
      return action.payload.users;
    default:
      return users;
  }
}

export default userReducer;
