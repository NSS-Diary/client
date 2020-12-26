import React from 'react';
import { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import './Alert.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div className="alert-box" key={alert.id}>
        {alert.msg}
      </div>
    ))
  );
};

export default Alert;
