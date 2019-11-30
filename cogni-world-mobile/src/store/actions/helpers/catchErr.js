import { SET_ERROR } from '../actionTypes';
import store from '../../createStore';

const catchErr = err => {
  const { dispatch } = store;

  const message =
    err.response && err.response.data && err.response.data.message;
  dispatch({
    type: SET_ERROR,
    payload: message || 'Please check your internet connection',
  });
  setTimeout(() => {
    dispatch({
      type: SET_ERROR,
      payload: '',
    });
  }, 500);
};

export default catchErr;
