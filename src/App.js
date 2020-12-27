import { Fragment } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import StudentHome from './components/pages/StudentHome';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import './App.css';
import AdminHome from './components/pages/AdminHome';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Alert />
          <Switch>
            <Route exact path="/">
              <StudentHome />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/adminhome">
              <AdminHome />
            </Route>
            <Route exact path="/studenthome">
              <StudentHome />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
