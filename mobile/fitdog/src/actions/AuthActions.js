import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { ROOT } from '../config';
import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  EMAIL_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
} from './types';

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

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const signupUser = ({ username, email, password }) => {
  return (dispatch) =>{
    dispatch({ type: SIGNUP_USER });
    axios.post(`${ROOT}/signup`, {
      username, email, password
    })
    .then(response => {
      AsyncStorage.setItem('@fitdog:session', response.data.token);
    })
    .then(() => signupUserSuccess(dispatch))
    .catch(error => {
      console.log(error.message);
      signupUserFail(dispatch);
    });
  };
};

const signupUserFail = (dispatch) => {
  dispatch({ type: SIGNUP_USER_FAIL });
};

const signupUserSuccess = (dispatch) => {
  dispatch({ type: SIGNUP_USER_SUCCESS });

  Actions.main();
};

export const loginUser = ({ username, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    axios.post(`${ROOT}/login`, {
      username, password
    })
    .then(response => {
      AsyncStorage.setItem('@fitdog:session', response.data.token);
      loginUserSuccess(dispatch, response.data.user);
    })
    .catch(error => {
      console.log(error.message);
      loginUserFail(dispatch);
    });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });

  Actions.main();
};
