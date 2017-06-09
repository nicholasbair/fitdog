import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ActivityReducer from './ActivityReducer';

export default combineReducers({
  auth: AuthReducer,
  activities: ActivityReducer
});
