import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ActivityReducer from './ActivityReducer';
import ActivityFormReducer from './ActivityFormReducer';

export default combineReducers({
  auth: AuthReducer,
  activities: ActivityReducer,
  activityForm: ActivityFormReducer
});
