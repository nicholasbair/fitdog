import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { ROOT } from '../config';
import {
  FETCH_DOGS,
  FETCH_DOGS_SUCCESS
} from './types';

AsyncStorage.getItem('@fitdog:session').then(token => {
  axios.defaults.headers.common['Authorization'] = token;
});

export const fetchDogs = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_DOGS });
    axios.get(`${ROOT}/dogs`)
      .then(response => {
        dispatch({ type: FETCH_DOGS_SUCCESS, payload: response.data });
      });
  };
};
