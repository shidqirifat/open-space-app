import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ACTION_TYPE = {
  RECEIVE_USER: 'RECEIVE_USER',
};

function receiveUserActionCreator(users) {
  return {
    type: ACTION_TYPE.RECEIVE_USER,
    payload: { users },
  };
}

function asyncRegisterUser({ id, name, password }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      await api.register({ id, name, password });
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export { ACTION_TYPE, receiveUserActionCreator, asyncRegisterUser };
