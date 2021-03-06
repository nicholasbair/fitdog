import {
  FETCH_ACTIVITIES_SUCCESS,
  FETCH_ACTIVITIES
} from '../actions/types';

const INITIAL_STATE = {
  activities: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES:
      return { ...state, loading: true };
    case FETCH_ACTIVITIES_SUCCESS:
      return { ...state, loading: false, activities: action.payload };
    default:
      return state;
  }
};
