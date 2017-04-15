import { combineReducers } from 'redux';
import ActivitiesReducer from './ActivitiesReducer';
import DogsReducer from './DogsReducer';

const rootReducer = combineReducers({
  activities: ActivitiesReducer,
  dogs: DogsReducer
});

export default rootReducer;
