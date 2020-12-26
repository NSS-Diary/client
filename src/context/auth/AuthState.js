import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERRORS,
} from '../types';
import { APIEndpoint } from '../../environments/environment';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  //Load User

  //Register User

  const register = async (formData) => {
    console.log(formData);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('api/auth/signup', formData, config);
      // console.log(res.data);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.response.data.errors.message);
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.errors.message,
      });
    }
  };

  //Login User

  //Logout

  //Clear Errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
