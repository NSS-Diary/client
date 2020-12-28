import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

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
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    // try {
    //   const res = await axios.get('/api/user/me');
    //   console.log(res.data.user);
    //   dispatch({
    //     type: USER_LOADED,
    //     payload: res.data.user,
    //   });
    // } catch (err) {
    //   dispatch({
    //     type: AUTH_ERROR,
    //     payload: err.response.data.errors.message,
    //   });
    // }
  };

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
      loadUser();
    } catch (err) {
      console.log(err.response.data.errors.message);
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.errors.message,
      });
    }
  };

  //Login User
  const login = async (formData) => {
    console.log(formData);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('api/auth/signin', formData, config);
      // console.log(res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      console.log(err.response.data.errors.message);
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.errors.message,
      });
    }
  };

  //Logout
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  //Clear Errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        login,
        clearErrors,
        loadUser,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
