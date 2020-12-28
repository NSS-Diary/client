import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Navbar from '../layout/Navbar';
import anime from 'animejs';
import { path } from './path';
import AuthContext from '../../context/auth/authContext';

import './AdminHome.css';
import { useContext } from 'react/cjs/react.development';
const AdminHome = ({ studentsEnrolled = 340, daysLeftCourse = 120, classRoomNos = 12 }) => {
  const authContext = useContext(AuthContext);
  const { loadUser, user } = authContext;
  const objRef = useRef(null);
  const [students, setStudents] = useState(0);
  const [daysLeft, setDays] = useState(150);
  const [classRooms, setClassrooms] = useState(0);
  let values = {
    students,
    daysLeft,
    classRooms,
  };
  const svgRef = useRef(null);

  useEffect(() => {
    loadUser();
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
    svgRef.current = anime({
      targets: '#demo-svg path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 10000,
      delay: function (el, i) {
        return i * 2500;
      },
      direction: 'alternate',
      loop: true,
    });
  }, []);
  let usertype = 'Admin';
  if (user.user_type === 'SUPER_ADMIN') {
    usertype = 'SuperAdmin';
  } else if (user.user_type === 'CLASSROOM_ADMIN') {
    usertype = 'Admin';
  }
  return (
    <div>
      <Navbar title="Home" user={usertype} />
      <div
        className="main-container"
        onClick={() => {
          objRef.current.restart();
        }}
      >
        <div className="container-admin">
          <div className="student alter-width">
            <div>Enrolled Students</div>
            <div style={{ fontWeight: 'bold' }}>{students}</div>
          </div>
          <div className="days alter-width">
            <div>Days Left</div>
            <div style={{ fontWeight: 'bold' }}>{daysLeft}</div>
          </div>
          <div className="classroom alter-width">
            <div>Classrooms</div>
            <div style={{ fontWeight: 'bold' }}>{classRooms}</div>
          </div>
        </div>
        <div className="svg-classroom">
          <svg
            width="40%"
            viewBox="0 0 907.2 151.8"
            xmlns="http://www.w3.org/2000/svg"
            id="demo-svg"
          >
            <path
              stroke="#851C49"
              strokeWidth="3"
              fill="none"
              d={path}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
