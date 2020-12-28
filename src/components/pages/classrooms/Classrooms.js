import React, { useEffect } from 'react';
import { useContext } from 'react/cjs/react.development';
import ClassroomContext from '../../../context/classroom/classroomContext';

const Classrooms = () => {
  const classroomContext = useContext(ClassroomContext);
  const { classrooms, getClassrooms } = classroomContext;
  useEffect(() => {
    getClassrooms();
  }, []);
  return <div>{classrooms === null ? 'Loading' : 'Loaded'}</div>;
};

export default Classrooms;
