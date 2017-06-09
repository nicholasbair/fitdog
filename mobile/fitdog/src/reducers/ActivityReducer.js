import {
  FETCH_ACTIVITIES_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
