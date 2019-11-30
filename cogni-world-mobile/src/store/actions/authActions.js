import * as actionTypes from './actionTypes';
import catchErr from './helpers/catchErr';
import http, { userAPI } from '../../assets/utils/httpService';

export const checkUserHasRegistered = email =>
  new Promise((resolve, reject) => {
    http
      .get(`${userAPI}/isRegistered/${email}`)
      .then(res => {
        resolve(res.data.isRegistered);
      })
      .catch(err => {
        catchErr(err);
        reject();
      });
  });

export const userSignup = (userData, callback) => dispatch => {
  dispatch({
    type: actionTypes.START_LOADING,
  });
  http
    .post(userAPI, userData)
    .then(() => {
      if (typeof callback === 'function') callback();
    })
    .catch(err => {
      catchErr(err);
    })
    .finally(() => {
      dispatch({
        type: actionTypes.END_LOADING,
      });
    });
};
