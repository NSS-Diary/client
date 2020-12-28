import { stat } from 'fs';
import { GET_CLASSROOMS, ADD_CLASSROOM, CLASSROOM_ERROR, CLEAR_ERRORS } from '../types';

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
