import React from 'react';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../../layout/Navbar';
import AlertContext from '../../../../context/alert/alertContext';

const AddActivity = ({ match }) => {
  const history = useHistory();
  console.log(match.params.classcode);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  return (
    <div className="center">
      <div className="add-container">
        <form
          className="styled-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (name === '' || type === '') {
              setAlert('Please enter all the fields');
            }
            // addActivity({
            //   classroomName: classname,
            //   adminName: adminname,
            // });
            // if (name !== '' && type !== '' && error === null) {
            //   setAlert('Activity Added', 'success');
            //   history.push('/adminhome');
            // }
          }}
        >
          <input
            type="text"
            placeholder="Activity Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Type"
            name="type"
            onChange={(e) => setType(e.target.value)}
          />
          <button type="submit">Submit</button>
          <button
            type="button"
            onClick={() => {
              history.push(`/classroom/${match.params.classcode}/activities`);
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddActivity;
