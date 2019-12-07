import { combineReducers } from 'redux';

import generalReducer from './generalReducer';
import authReducer from './authReducer';
import canteenReducer from './canteenReducer';

export default combineReducers({
  general: generalReducer,
  auth: authReducer,
  canteen: canteenReducer,
});
