import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../layout/Navbar';
import './Activity.css';

const AddActivity = ({ match }) => {
  console.log(match.params.classcode);
  return (
    <div>
      <Navbar title="Activities" />
      <div className="center-container">
        <div className="items">
          <Link
            to={`/classroom/${match.params.classcode}/activities/addactivity`}
            style={{ textDecoration: 'none', color: '#000' }}
          >
            <h1>Add Activity</h1>
          </Link>
        </div>
        <div className="items">
          <h1>List Activities</h1>
        </div>
      </div>
    </div>
  );
};

export default AddActivity;
