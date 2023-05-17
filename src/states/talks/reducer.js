import { ACTION_TYPE } from './action';

function talksReducer(talks = [], action = {}) {
  switch (action.type) {
    case ACTION_TYPE.RECEIVER_TALKS:
      return action.payload.talks;
    case ACTION_TYPE.ADD_TALK:
      return [action.payload.talk, ...talks];
    case ACTION_TYPE.TOGGLE_LIKE_TALK:
      return talks.map((talk) => {
        if (talk.id === action.payload.talkId) {
          return {
            ...talk,
            likes: talk.likes.includes(action.payload.userId)
              ? talk.likes.filter((id) => id !== action.payload.userId)
              : talk.likes.concat([action.payload.userId]),
          };
        }
        return talk;
      });
    default:
      return talks;
  }
}

export default talksReducer;
