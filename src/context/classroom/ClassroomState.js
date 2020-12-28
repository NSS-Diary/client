import React, { useReducer } from 'react';
import ClassroomContext from './classroomContext';
import classroomReducer from './classroomReducer';

import { ADD_CLASSROOM, GET_CLASSROOMS, CLASSROOM_ERROR, CLEAR_ERRORS } from '../types';

import axios from 'axios';
import { copyFile, stat } from 'fs';

const ClassroomState = (props) => {
  const initialState = {
    classrooms: null,
    error: null,
    loading: false,
  };
  const [state, dispatch] = useReducer(classroomReducer);
  //Get classrooms
  const getClassrooms = async () => {
    try {
      const res = await axios.get('api/classroom/list');
      dispatch({ type: GET_CLASSROOMS, payload: res.data });
    } catch (err) {
      dispatch({
        type: CLASSROOM_ERROR,
        payload: err.response.errors.message,
      });
    }
  };
  //Add Classroom
  const addClassroom = async (classroom) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('api/classroom/add', classroom, config);
      dispatch({ type: ADD_CLASSROOM, payload: res.data });
    } catch (err) {
      dispatch({
        type: CLASSROOM_ERROR,
        payload: err.response.errors.message,
      });
    }
  };
  //clear error
  const clearError = () => {
    dispatch({ type: CLEAR_ERRORS });
  };
  return (
    <ClassroomContext.Provider
      value={{
        classrooms: state.classrooms,
        error: state.error,
        loading: state.loading,
        addClassroom,
        getClassrooms,
      }}
    >
      {props.children}
    </ClassroomContext.Provider>
  );
};

export default ClassroomState;
