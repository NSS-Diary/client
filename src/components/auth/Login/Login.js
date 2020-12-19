import React, { useState } from 'react';
import nss_logo from '../../../images/nss_logo.png';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faKey, faUser, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

const Login = () => {
  const [eyeIcon, setEyeIcon] = useState(faEyeSlash);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    setEyeIcon(passwordShown ? faEyeSlash : faEye);
  };

  return (
    <div className="container">
      <div className="loginForm">
        <form>
          <p className="h_h1 shadow-dark-blue">Login</p>
          <div className="textbox">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="Username" />
          </div>
          <div className="textbox">
            <FontAwesomeIcon icon={faKey} />
            <input
              placeholder="Password"
              name="password"
              type={passwordShown ? 'text' : 'password'}
            />
            <FontAwesomeIcon className="suffix" icon={eyeIcon} onClick={togglePasswordVisiblity} />
          </div>
          <div className="buttons">
            <AwesomeButton type="primary">Login</AwesomeButton>
            <AwesomeButton type="secondary">Register</AwesomeButton>
          </div>
        </form>
      </div>
      <div className="logo">
        <img src={nss_logo} alt="Nss Logo" width={150} />
        <p className="h_h1 shadow-light-blue">NSS DIARY</p>
      </div>
    </div>
  );
};

export default Login;
