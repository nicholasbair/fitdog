import { AsyncStorage } from 'react-native';
import axios from 'axios';
import Actions from 'react-native-router-flux';
import {
  FETCH_ACTIVITIES_SUCCESS
} from './types';

const ROOT = 'http://127.0.0.1:9393/api/v1';

AsyncStorage.getItem('@fitdog:session').then(token => {
  axios.defaults.headers.common['Authorization'] = token
});


export const fetchActivities = () => {
  return (dispatch) => {
    axios.get(`${ROOT}/activities`)
    .then(response => {
      dispatch({ type: FETCH_ACTIVITIES_SUCCESS, payload: response.data });
    });
  };

  // return (dispatch) => {
  //   firebase.database().ref(`/users/${currentUser.uid}/employees`)
  //     .on('value', snapshot => {
  //       dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
  //     });
  // }
};
