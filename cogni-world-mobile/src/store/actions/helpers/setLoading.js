import { START_LOADING, END_LOADING } from '../actionTypes';
import store from '../../createStore';

export const startLoading = () => {
  const { dispatch } = store;

  dispatch({
    type: START_LOADING,
  });
};

export const endLoading = () => {
  const { dispatch } = store;

  dispatch({
    type: END_LOADING,
  });
};
