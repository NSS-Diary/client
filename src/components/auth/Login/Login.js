import React, { useState, useContext, useEffect } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { useHistory } from 'react-router-dom';
import 'react-awesome-button/dist/styles.css';
import { FaUser, FaKey, FaEye, FaEyeSlash } from 'react-icons/fa';
import Navbar from '../../layout/Navbar';
import './Login.css';
import useForm from '../../../hooks/Form';
import { AuthService } from '../../../services/auth';
import AlertContext from '../../../context/alert/alertContext';
import AuthContext from '../../../context/auth/authContext';

const Login = () => {
  const history = useHistory();
  const AuthServiceInstance = new AuthService();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated, user } = authContext;
  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
      if (user.user_type === 'SUPER_ADMIN') {
        history.push('/adminhome');
      } else if (user.user_type === 'CLASSROOM_ADMIN') {
        history.push('/adminhome');
      } else if (user.user_type === 'STUDENT') {
        history.push('/studenthome');
      }

      console.log('authenticated');
    }

    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }
  }, [error, history, isAuthenticated, user]);
  const submit = () => {
    if (inputs.username === '' || inputs.password === '') {
      setAlert('Please enter all the fields');
    } else {
      login({
        username: inputs.username,
        password: inputs.password,
      });
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(submit, {
    username: '',
    password: '',
  });

  return (
    <div className="authContainer">
      <Navbar title="Login" />
      <div className="authContainerBody">
        <form className="loginForm" onSubmit={handleSubmit}>
          <p className="h_h1 shadow-dark-blue">Login</p>
          <div className="textbox">
            <FaUser />
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleInputChange}
            />
          </div>
          <div className="textbox">
            <FaKey />
            <input
              placeholder="Password"
              name="password"
              type={passwordShown ? 'text' : 'password'}
              onChange={handleInputChange}
            />
            {!passwordShown ? (
              <FaEyeSlash className="suffix" onClick={togglePasswordVisiblity} size={20} />
            ) : (
              <FaEye className="suffix" onClick={togglePasswordVisiblity} size={20} />
            )}
          </div>
          <div className="buttons">
            <AwesomeButton type="primary">Submit</AwesomeButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
