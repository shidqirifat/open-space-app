import { ACTION_TYPE } from './action';

function talkDetailReducer(talkDetail = null, action = {}) {
  switch (action.type) {
    case ACTION_TYPE.RECEIVE_TALK_DETAIL:
      return action.payload.talkDetail;
    case ACTION_TYPE.CLEAR_TALK_DETAIL:
      return null;
    case ACTION_TYPE.TOGGLE_TALK_DETAIL:
      return {
        ...talkDetail,
        likes: talkDetail.likes.includes(action.payload.userId)
          ? talkDetail.likes.filter((id) => id !== action.payload.userId)
          : talkDetail.likes.concat(action.payload.userId),
      };
    default:
      return talkDetail;
  }
}

export default talkDetailReducer;
