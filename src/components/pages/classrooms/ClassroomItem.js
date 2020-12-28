import React, { useEffect } from 'react';
import Navbar from '../../layout/Navbar';
import './Classrooms.css';
import ClassroomContext from '../../../context/classroom/classroomContext';
import { useContext } from 'react';
const ClassroomItem = ({ match }) => {
  const classroomContext = useContext(ClassroomContext);
  const classroom = JSON.parse(localStorage.getItem('classroom'));
  console.log(classroom);
  const { current_classroom, getClassroom } = classroomContext;

  const classcode = match.params.classcode;

  return (
    <div>
      <Navbar title="Classroom" />
      <div className="heading">
        <h1>Classroom Name - {classroom.name}</h1>
      </div>
    </div>
  );
};

export default ClassroomItem;
