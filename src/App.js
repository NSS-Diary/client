import { Fragment } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import StudentHome from "./components/pages/StudentHome";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <StudentHome />
      </div>
    </div>
  );
}

export default App;
