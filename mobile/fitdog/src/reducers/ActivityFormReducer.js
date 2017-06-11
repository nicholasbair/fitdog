import {
  ACTIVITY_NAME_CHANGED,
  ACTIVITY_DOGS_CHANGED,
  ACTIVITY_DURATION_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  duration: '',
  dogs: [],
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIVITY_NAME_CHANGED:
      return { ...state, name: action.payload };
    case ACTIVITY_DURATION_CHANGED:
      return { ...state, duration: action.payload };
    case ACTIVITY_DOGS_CHANGED:
      return { ...state, dogs: action.payload };
    default:
      return state;
  }
};
