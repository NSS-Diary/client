import { Fragment } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import StudentHome from './components/pages/StudentHome';
import Login from './components/auth/Login/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <StudentHome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
