import React, { useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { FaUser, FaUserSecret, FaKey, FaEye, FaEyeSlash, FaEnvelope } from 'react-icons/fa';
import Navbar from '../../layout/Navbar';
import './Register.css';
import useForm from '../../../hooks/Form';
import AlertContext from '../../../context/alert/alertContext';
import AuthContext from '../../../context/auth/authContext';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory('/');
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/studenthome');
      console.log('authenticated');
    }
    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }
  }, [error, history, isAuthenticated]);

  const submit = () => {
    if (
      inputs.user === '' ||
      inputs.name === '' ||
      inputs.email === '' ||
      inputs.password === '' ||
      inputs.conpassword === '' ||
      inputs.classCode === ''
    ) {
      setAlert('Please enter all the fields');
    } else if (inputs.password !== inputs.conpassword) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        username: inputs.user,
        email: inputs.email,
        name: inputs.name,
        password: inputs.password,
        classroom_code: inputs.classCode,
      });
    }
    // console.log(inputs);
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
              <input type="text" placeholder="Username" name="user" onChange={handleInputChange} />
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
