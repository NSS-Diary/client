import React, { useContext, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import ClassroomContext from '../../../context/classroom/classroomContext';
import AuthContext from '../../../context/auth/authContext';
import AlertContext from '../../../context/alert/alertContext';
import './AddClassroom.css';
import { useHistory } from 'react-router-dom';
import { set } from 'animejs';
const AddClassroom = () => {
  const history = useHistory();
  const classroomContext = useContext(ClassroomContext);
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { loadUser } = authContext;
  const { setAlert } = alertContext;
  const { addClassroom, error, clearError } = classroomContext;
  const [classname, setClass] = useState('');
  const [adminname, setAdmin] = useState('');
  useEffect(() => {
    if (error && error != 'celebrate request validation failed') {
      console.log(error);
      setAlert(error, 'danger');
      clearError();
    }
    loadUser();
  }, [error]);
  return (
    <div className="center">
      <div className="add-container">
        <form
          className="styled-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (classname === '' || adminname === '') {
              setAlert('Please enter all the fields');
            }
            addClassroom({
              classroomName: classname,
              adminName: adminname,
            });
            if (classname !== '' && adminname !== '' && error === null) {
              setAlert('Classroom Added', 'success');
              history.push('/adminhome');
            }
          }}
        >
          <input
            type="text"
            placeholder="Class Name"
            name="classname"
            onChange={(e) => setClass(e.target.value)}
          />
          <input
            type="text"
            placeholder="Admin Name"
            name="adminname"
            onChange={(e) => setAdmin(e.target.value)}
          />
          <button type="submit">Submit</button>
          <button
            type="button"
            onClick={() => {
              history.push('/adminhome');
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClassroom;
