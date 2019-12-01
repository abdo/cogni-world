import { AsyncStorage } from 'react-native';
import jwtDecode from 'jwt-decode';

import { startLoading, endLoading } from './helpers/setLoading';
import * as actionTypes from './actionTypes';
import catchErr from './helpers/catchErr';

import http, {
  userAPI,
  setAuthToken,
  removeAuthToken,
} from '../../assets/utils/httpService';

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

export const userSignup = (userData, callback) => () => {
  startLoading();
  http
    .post(userAPI, userData)
    .then(() => {
      if (typeof callback === 'function') callback();
    })
    .catch(err => {
      catchErr(err);
    })
    .finally(() => {
      startLoading();
    });
};

export const userSignin = (userData, callback) => dispatch => {
  startLoading();
  http
    .post(`${userAPI}/signin`, userData)
    .then(res => {
      const { token } = res.data;
      // Save token to storage
      AsyncStorage.setItem(keys.storedJWTname, token).catch(() => {
        console.log('Could not save token into async storage');
      });

      // Set Authorization header
      setAuthToken(token);

      // Decode token to get user data
      const user = jwtDecode(token);
      console.log(user);

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
      endLoading();
    });
};

export const userSignout = callback => dispatch => {
  // Remove token from storage
  AsyncStorage.removeItem(keys.storedJWTname).catch(() => {
    console.log('Could not remove your saved credentials');
    if (typeof callback === 'function') callback();
  });

  // Remove Authorization header
  removeAuthToken();

  // Remove user from auth reducer
  dispatch({
    type: actionTypes.UNSET_CURRENT_USER,
  });
};

// When user opens app
export const checkIfUserIsSigned = () => dispatch => {
  dispatch({
    type: actionTypes.START_CHECK_USER_AUTHENTICATION,
  });
  AsyncStorage.getItem(keys.storedJWTname)
    .then(token => {
      if (token) {
        // Set Authorization header
        setAuthToken(token);

        // Decode token to get user data
        const decodedToken = jwtDecode(token);

        // Check for expired token
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp && decodedToken.exp < currentTime) {
          dispatch(userSignout());
        } else {
          // Set user
          dispatch({
            type: actionTypes.SET_CURRENT_USER,
            payload: decodedToken,
          });
        }
      }
    })
    .finally(() => {
      dispatch({
        type: actionTypes.END_CHECK_USER_AUTHENTICATION,
      });
    });
};
