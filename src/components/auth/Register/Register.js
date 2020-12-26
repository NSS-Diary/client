import React, { useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { FaUser, FaUserSecret, FaKey, FaEye, FaEyeSlash, FaEnvelope } from 'react-icons/fa';
import Navbar from '../../layout/Navbar';
import './Register.css';
import useForm from '../../../hooks/Form';

const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const submit = () => {
    console.log(inputs);
  };
  const { inputs, handleInputChange, handleSubmit } = useForm(submit, {
    user: '',
    name: '',
    email: '',
    password: '',
    conpassword: '',
    classCode: '',
  });

  return (
    <div className="authContainer">
      <Navbar title="Register" />
      <div className="authContainerBody">
        <form className="registerForm" onSubmit={handleSubmit}>
          <p className="h_h1 shadow-dark-blue">Register</p>
          <div className="formGroup">
            <div className="textbox">
              <FaUser />
              <input type="text" placeholder="Name" name="name" onChange={handleInputChange} />
            </div>
            <div className="textbox">
              <FaEnvelope />
              <input type="text" placeholder="Email" name="email" onChange={handleInputChange} />
            </div>
          </div>
          <div className="formGroup">
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
              <FaUserSecret />
              <input
                type="text"
                placeholder="Classroom Code"
                name="classCode"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="formGroup">
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
            <div className="textbox">
              <FaKey />
              <input
                type="text"
                placeholder="Confirm Password"
                name="conpassword"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="buttons">
            <AwesomeButton type="primary">Submit</AwesomeButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
