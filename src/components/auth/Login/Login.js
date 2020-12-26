import React, { useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { useHistory } from 'react-router-dom';
import 'react-awesome-button/dist/styles.css';
import { FaUser, FaKey, FaEye, FaEyeSlash } from 'react-icons/fa';
import Navbar from '../../layout/Navbar';
import './Login.css';
import useForm from '../../../hooks/Form';
import { AuthService } from '../../../services/auth';

const Login = () => {
  const history = useHistory();
  const AuthServiceInstance = new AuthService();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const submit = () => {
    AuthServiceInstance.SignIn(inputs)
      .then((res) => {
        history.push('/');
      })
      .catch((err) => {
        console.log('Error Occured while Logging in', err);
      });
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
