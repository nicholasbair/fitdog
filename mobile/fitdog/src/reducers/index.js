import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ActivityReducer from './ActivityReducer';
import ActivityFormReducer from './ActivityFormReducer';
import DogReducer from './DogReducer';
import DogFormReducer from './DogFormReducer';

export default combineReducers({
  auth: AuthReducer,
  activities: ActivityReducer,
  activityForm: ActivityFormReducer,
  dogs: DogReducer,
  dogForm: DogFormReducer
});
