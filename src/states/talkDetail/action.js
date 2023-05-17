import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ACTION_TYPE = {
  RECEIVE_TALK_DETAIL: 'RECEIVE_TALK_DETAIL',
  CLEAR_TALK_DETAIL: 'CLEAR_TALK_DETAIL',
  TOGGLE_TALK_DETAIL: 'TOGGLE_TALK_DETAIL',
};

function receiveTalkDetailActionCreator(talkDetail) {
  return {
    type: ACTION_TYPE.RECEIVE_TALK_DETAIL,
    payload: { talkDetail },
  };
}

function clearTalkDetailActionCreator() {
  return {
    type: ACTION_TYPE.CLEAR_TALK_DETAIL,
  };
}

function toggleLikeTalkDetailActionCreator(userId) {
  return {
    type: ACTION_TYPE.TOGGLE_TALK_DETAIL,
    payload: { userId },
  };
}

function asyncReceiveTalkDetail(talkId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearTalkDetailActionCreator());

    try {
      const talkDetail = await api.getTalkDetail(talkId);
      dispatch(receiveTalkDetailActionCreator(talkDetail));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToggleLikeTalkDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, talkDetail } = getState();
    dispatch(toggleLikeTalkDetailActionCreator(authUser.id));

    try {
      await api.toggleLikeTalk(talkDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export {
  ACTION_TYPE,
  receiveTalkDetailActionCreator,
  clearTalkDetailActionCreator,
  toggleLikeTalkDetailActionCreator,
  asyncReceiveTalkDetail,
  asyncToggleLikeTalkDetail,
};
