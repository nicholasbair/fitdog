import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { ROOT } from '../CONFIG';
import {
  FETCH_ACTIVITIES_SUCCESS,
  FETCH_ACTIVITIES
} from './types';

AsyncStorage.getItem('@fitdog:session').then(token => {
  axios.defaults.headers.common['Authorization'] = token
});

export const fetchActivities = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ACTIVITIES });
    axios.get(`${ROOT}/activities`)
    .then(response => {
      dispatch({ type: FETCH_ACTIVITIES_SUCCESS, payload: response.data });
    });
  };
};
