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
  ACTIVITY_ADD_DOG,
  ACTIVITY_REMOVE_DOG,
  ADD_ACTIVITY,
  ADD_ACTIVITY_SUCCESS,
  SHOW_EDIT_ACTIVITY,
  EDIT_ACTIVITY,
  EDIT_ACTIVITY_SUCCESS
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

export const activityAddDog = dog => {
  return {
    type: ACTIVITY_ADD_DOG,
    payload: dog
  };
};
export const activityRemoveDog = dog => {
  return {
    type: ACTIVITY_REMOVE_DOG,
    payload: dog
  };
};

export const addActivity = ({ name, duration, dogs }) => {
  return (dispatch) => {
    dispatch({ type: ADD_ACTIVITY });
    axios.post(`${ROOT}/activities`, {
      name, duration, dogs
    })
      .then(() => {
        dispatch({ type: ADD_ACTIVITY_SUCCESS });
      })
      .catch(error => {
        console.log(error);
      });
      Actions.activityList();
  };
};

export const showEditActivity = ({ activity }) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_EDIT_ACTIVITY,
      payload: activity
    });
    Actions.activityForm();
  };
};

export const editActivity = ({ id, name, duration, dogs }) => {
  return (dispatch) => {
    dispatch({ type: EDIT_ACTIVITY });
    axios.patch(`${ROOT}/activities/${id}`, {
      name, duration, dogs
    })
      .then(() => {
        dispatch({ type: EDIT_ACTIVITY_SUCCESS });
      })
      .catch(error => {
        console.log(error);
      });
      Actions.activityList();
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
