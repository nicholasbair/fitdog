import {
  FETCH_DOGS,
  FETCH_DOGS_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  dogs: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
