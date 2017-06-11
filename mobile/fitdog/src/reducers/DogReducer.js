import {
  FETCH_DOGS,
  FETCH_DOGS_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  dogs: [],
  loading: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DOGS:
      return { ...state, loading: true };
    case FETCH_DOGS_SUCCESS:
      return { ...state, loading: false, dogs: action.payload };
    default:
      return state;
  }
};
