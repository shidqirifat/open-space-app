import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';

const ACTION_TYPE = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadAction(isPreLoad) {
  return {
    type: ACTION_TYPE.SET_IS_PRELOAD,
    payload: { isPreLoad },
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      dispatch(setAuthUserActionCreator(null));
    } finally {
      dispatch(setIsPreloadAction(false));
    }

    dispatch(hideLoading());
  };
}

export { ACTION_TYPE, setIsPreloadAction, asyncPreloadProcess };
