import React, { useReducer } from 'react';
import ClassroomContext from './classroomContext';
import classroomReducer from './classroomReducer';

import {
  ADD_CLASSROOM,
  GET_CLASSROOMS,
  CLASSROOM_ERROR,
  CLEAR_ERRORS,
  GET_CLASSROOM,
} from '../types';

import setAuthToken from '../../utils/setAuthToken';
import axios from 'axios';
import { APIEndpoint } from '../../environments/environment';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const ClassroomState = (props) => {
  const initialState = {
    classrooms: [],
    current_classroom: null,
    error: null,
    loading: false,
  };
  const [state, dispatch] = useReducer(classroomReducer, initialState);
  //Get classrooms
  const getClassrooms = async () => {
    try {
      const res = await axios.get(`${APIEndpoint}/api/classroom/list`);
      dispatch({ type: GET_CLASSROOMS, payload: res.data });
    } catch (err) {
      dispatch({
        type: CLASSROOM_ERROR,
        payload: err.response,
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
      const res = await axios.post(`${APIEndpoint}/api/classroom/add`, classroom, config);
      dispatch({ type: ADD_CLASSROOM, payload: res.data });
    } catch (err) {
      dispatch({
        type: CLASSROOM_ERROR,
        payload: err.response.data.errors.message,
      });
    }
  };
  //Get classroom
  // const getClassroom = async (classcode) => {
  //   console.log(classcode);
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   try {
  //     const res = await axios.post(`${APIEndpoint}classroom/info`, classcode, config);
  //     dispatch({ type: GET_CLASSROOM, payload: res.data });
  //   } catch (err) {
  //     dispatch({
  //       type: CLASSROOM_ERROR,
  //       payload: err.response.data.errors.message,
  //     });
  //   }
  // };
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

        clearError,
      }}
    >
      {props.children}
    </ClassroomContext.Provider>
  );
};

export default ClassroomState;
