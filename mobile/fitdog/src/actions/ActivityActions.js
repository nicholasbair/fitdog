import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { ROOT } from '../config';
import {
  FETCH_ACTIVITIES_SUCCESS,
  FETCH_ACTIVITIES,
  DELETE_ACTIVITY,
  ACTIVITY_NAME_CHANGED,
  ACTIVITY_DURATION_CHANGED,
  ACTIVITY_DOGS_CHANGED,
  ADD_ACTIVITY
} from './types';

AsyncStorage.getItem('@fitdog:session').then(token => {
  axios.defaults.headers.common['Authorization'] = token;
});

export const activityNameChanged = text => {
  return {
    type: ACTIVITY_NAME_CHANGED,
    payload: text
  };
};

export const activityDurationChanged = text => {
  return {
    type: ACTIVITY_DURATION_CHANGED,
    payload: text
  };
};

export const activityDogsChanged = dogs => {
  return {
    type: ACTIVITY_DOGS_CHANGED,
    payload: dogs
  };
};

export const addActivity = ({ name, duration, dogs }) => {
  return (dispatch) => {
    dispatch({ type: ADD_ACTIVITY });
  };
};

export const fetchActivities = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ACTIVITIES });
    axios.get(`${ROOT}/activities`)
      .then(response => {
        dispatch({ type: FETCH_ACTIVITIES_SUCCESS, payload: response.data });
      });
  };
};

export const deleteActivity = activityId => {
  return (dispatch) => {
    dispatch({ type: DELETE_ACTIVITY });
    axios.delete(`${ROOT}/activities/${activityId}/delete`)
      .then(() => {
        Actions.activityList();
      });
  };
};
