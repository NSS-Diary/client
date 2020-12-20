import React, { useState } from 'react';
import nss_logo from '../../../images/nss_logo.png';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { FaUser, FaKey, FaEye, FaEyeSlash } from 'react-icons/fa';
import Navbar from '../../layout/Navbar';
import './Login.css';

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      <Navbar title="Login" />
      <div className="container">
        <div className="loginForm">
          <form>
            <p className="h_h1 shadow-dark-blue">Login</p>
            <div className="textbox">
              <FaUser />
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              />
            </div>
            <div className="textbox">
              <FaKey />
              <input
                placeholder="Password"
                name="password"
                type={passwordShown ? 'text' : 'password'}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {!passwordShown ? (
                <FaEyeSlash className="suffix" onClick={togglePasswordVisiblity} size={20} />
              ) : (
                <FaEye className="suffix" onClick={togglePasswordVisiblity} size={20} />
              )}
            </div>
            <div className="buttons">
              <AwesomeButton type="primary">Enter</AwesomeButton>
              {/* <AwesomeButton type="secondary">Register</AwesomeButton> */}
            </div>
          </form>
        </div>
        {/* <div className="logo">
          <img src={nss_logo} alt="Nss Logo" width={150} />
          <p className="h_h1 shadow-light-blue">NSS DIARY</p>
        </div> */}
      </div>
    </>
  );
};

export default Login;
