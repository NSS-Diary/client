import {
  GET_CLASSROOMS,
  ADD_CLASSROOM,
  CLASSROOM_ERROR,
  CLEAR_ERRORS,
  GET_CLASSROOM,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CLASSROOM:
      return {
        ...state,
        classrooms: [action.payload, ...state.classrooms],
        loading: false,
      };
    case GET_CLASSROOMS:
      return {
        ...state,
        classrooms: action.payload,
        loading: false,
      };
    case GET_CLASSROOM:
      return {
        ...state,
        current_classroom: action.payload,
      };
    case CLASSROOM_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};
