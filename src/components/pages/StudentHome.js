import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../layout/Navbar';
import ProgressBar from '../tools/ProgressBar';
import './StudentHome.css';
const StudentHome = () => {
  const [farm, setFarm] = useState(10);
  const [social, setSocial] = useState(28);
  const [project, setProject] = useState(47);
  return (
    <>
      <Navbar title="Home" user="Student" />
      <div className="progress">
        <div className="farm-work sub-activity">
          <p>Farm Work</p>
          <div className="bar">
            <ProgressBar percent={farm} color="#3e4756" />
          </div>
        </div>
        <div className="social-work sub-activity">
          <p>Social Work</p>
          <div className="bar">
            <ProgressBar percent={social} color="#851c49" />
          </div>
        </div>
        <div className="project-work sub-activity">
          <p>Project Work</p>
          <div className="bar">
            <ProgressBar percent={project} color="#004C90" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentHome;
