import { combineReducers } from 'redux';

import authReducer from './authReducer';
import generalReducer from './generalReducer';

export default combineReducers({
  auth: authReducer,
  general: generalReducer,
});
