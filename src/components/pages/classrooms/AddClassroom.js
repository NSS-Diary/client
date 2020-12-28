import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import ClassroomContext from '../../../context/classroom/classroomContext';
const AddClassroom = () => {
  const classroomContext = useContext(ClassroomContext);
  const { addClassroom } = classroomContext;
  const [classname, setClass] = useState('');
  return <div></div>;
};

export default AddClassroom;
