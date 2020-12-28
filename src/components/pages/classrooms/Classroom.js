import React from 'react';
import { Link } from 'react-router-dom';
import './Classrooms.css';

const Classroom = ({ classroom }) => {
  return (
    <Link
      to={`classroom/${classroom.classroom_code}`}
      style={{
        textDecoration: 'none',
        color: '#000',
        fontFamily: 'Montserrat',
      }}
      onClick={() => {
        localStorage.setItem('classroom', JSON.stringify(classroom));
      }}
    >
      <div className="classroom-item">{classroom.name}</div>
    </Link>
  );
};

export default Classroom;
