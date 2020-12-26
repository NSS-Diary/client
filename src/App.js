import { Fragment } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import StudentHome from './components/pages/StudentHome';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import './App.css';
import AdminHome from './components/pages/AdminHome';

function Root() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '50px',
        backgroundColor: 'yellow',
        height: '200px',
      }}
    >
      <Link to="/studenthome">StudentHome</Link>
      <Link to="/adminhome">AdminHome</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Root />
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
  );
}

export default App;
