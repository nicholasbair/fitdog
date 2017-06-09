import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

// TODO: move to dotenv file
const ROOT = 'http://127.0.0.1:9393/api/v1';

export const usernameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ username, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    axios.post(`${ROOT}/login`, {
      username, password
    })
    .then(response => {
      AsyncStorage.setItem('@fitdog:session', response.data.token);
    })
    .then(() => loginUserSuccess(dispatch))
    .catch(error => {
      console.log(error.message);
      loginUserFail(dispatch);
    });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch) => {
  dispatch({ type: LOGIN_USER_SUCCESS });

  Actions.main();
};
