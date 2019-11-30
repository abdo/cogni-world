import { AsyncStorage } from 'react-native';
import jwtDecode from 'jwt-decode';

import * as actionTypes from './actionTypes';
import catchErr from './helpers/catchErr';
import http, { userAPI, setAuthToken } from '../../assets/utils/httpService';

import keys from '../../keys.secret';

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

export const userSignin = (userData, callback) => dispatch => {
  dispatch({
    type: actionTypes.START_LOADING,
  });

  http
    .post(`${userAPI}/signin`, userData)
    .then(res => {
      const { token } = res.data;
      console.log(res.data);
      // Save token to storage
      AsyncStorage.setItem(keys.storedJWTname, token).catch(() => {
        console.log('Could not save token into async storage');
      });

      // Set Authorization header
      setAuthToken(token);

      // Decode token to get user data
      const user = jwtDecode(token);

      // Set user in auth reducer
      dispatch({
        type: actionTypes.SET_CURRENT_USER,
        payload: user,
      });

      if (typeof callback === 'function') callback(user);
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
