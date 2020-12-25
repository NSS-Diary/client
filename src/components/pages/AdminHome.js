import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Navbar from '../layout/Navbar';
import anime from 'animejs';

import './AdminHome.css';
const AdminHome = ({ studentsEnrolled = 340, daysLeftCourse = 120, classRoomNos = 12 }) => {
  const objRef = useRef(null);
  const [students, setStudents] = useState(0);
  const [daysLeft, setDays] = useState(150);
  const [classRooms, setClassrooms] = useState(0);
  let values = {
    students,
    daysLeft,
    classRooms,
  };
  useEffect(() => {
    objRef.current = anime({
      targets: values,
      students: studentsEnrolled,
      daysLeft: daysLeftCourse,
      classRooms: classRoomNos,
      round: 1,
      easing: 'linear',
      update: function () {
        setStudents(JSON.stringify(values.students));
        setDays(JSON.stringify(values.daysLeft));
        setClassrooms(JSON.stringify(values.classRooms));
      },
    });
  }, []);
  return (
    <div>
      <Navbar title="Home" user="Admin" />
      <div className="container-admin">
        <div className="student">
          <div>Enrolled Students</div>
          <div style={{ fontWeight: 'bold' }}>{students}</div>
        </div>
        <div className="days">
          <div>Days Left</div>
          <div style={{ fontWeight: 'bold' }}>{daysLeft}</div>
        </div>
        <div className="classroom">
          <div>Classrooms</div>
          <div style={{ fontWeight: 'bold' }}>{classRooms}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
