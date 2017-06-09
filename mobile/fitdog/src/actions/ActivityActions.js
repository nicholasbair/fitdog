import { AsyncStorage } from 'react-native';
import axios from 'axios';
// import Actions from 'react-native-router-flux';
import {
  FETCH_ACTIVITIES_SUCCESS,
  FETCH_ACTIVITIES
} from './types';

const ROOT = 'http://127.0.0.1:9393/api/v1';

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

// export const fetchActivity = () => {
//   return (dispatch) => {
//
//   };
// };
