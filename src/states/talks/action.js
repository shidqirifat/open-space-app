import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ACTION_TYPE = {
  RECEIVER_TALKS: 'RECEIVE_TALKS',
  ADD_TALK: 'ADD_TALK',
  TOGGLE_LIKE_TALK: 'TOGGLE_LIKE_TALK',
};

function receiveTalksActionCreator(talks) {
  return {
    type: ACTION_TYPE.RECEIVER_TALKS,
    payload: { talks },
  };
}

function addTalkActionCreator(talk) {
  return {
    type: ACTION_TYPE.ADD_TALK,
    payload: { talk },
  };
}

function toggleLikeTalkActionCreator({ talkId, userId }) {
  return {
    type: ACTION_TYPE.TOGGLE_LIKE_TALK,
    payload: { talkId, userId },
  };
}

function asyncAddTalk({ text, replyTo = '' }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const talk = await api.createTalk({ text, replyTo });
      dispatch(addTalkActionCreator(talk));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToggleLikeTalk(talkId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(toggleLikeTalkActionCreator({ talkId, userId: authUser.id }));

    try {
      await api.toggleLikeTalk(talkId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeTalkActionCreator({ talkId, userId: authUser.id }));
    }

    dispatch(hideLoading());
  };
}

export {
  ACTION_TYPE,
  receiveTalksActionCreator,
  addTalkActionCreator,
  toggleLikeTalkActionCreator,
  asyncAddTalk,
  asyncToggleLikeTalk,
};
