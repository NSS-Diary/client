import React, { useEffect } from 'react';
import { useContext } from 'react/cjs/react.development';
import Classroom from './Classroom';
import ClassroomContext from '../../../context/classroom/classroomContext';

const Classrooms = () => {
  const classroomContext = useContext(ClassroomContext);
  const { classrooms, getClassrooms } = classroomContext;
  useEffect(() => {
    getClassrooms();
  }, []);

  if (!classrooms) {
    return <div>Loading....</div>;
  } else {
    return (
      <div className="display-class">
        {classrooms.map((classroom) => {
          return <Classroom classroom={classroom} key={classroom.name} />;
        })}
      </div>
    );
  }
};

export default Classrooms;
