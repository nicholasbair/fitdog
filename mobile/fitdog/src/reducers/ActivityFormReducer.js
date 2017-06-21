import {
  ACTIVITY_NAME_CHANGED,
  ACTIVITY_ADD_DOG,
  ACTIVITY_REMOVE_DOG,
  ACTIVITY_DURATION_CHANGED,
  ADD_ACTIVITY_SUCCESS,
  SHOW_EDIT_ACTIVITY
} from '../actions/types';

const INITIAL_STATE = {
  id: '',
  name: '',
  duration: '',
  dogs: [],
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_EDIT_ACTIVITY:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        duration: action.payload.duration.toString()
      };
    case ACTIVITY_NAME_CHANGED:
      return { ...state, name: action.payload };
    case ACTIVITY_DURATION_CHANGED:
      return { ...state, duration: action.payload };
    case ACTIVITY_ADD_DOG:
      return { ...state, dogs: [...state.dogs, action.payload] };
    case ACTIVITY_REMOVE_DOG:
      return { ...state, dogs: state.dogs.filter(e => e !== action.payload) };
    case ADD_ACTIVITY_SUCCESS:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
