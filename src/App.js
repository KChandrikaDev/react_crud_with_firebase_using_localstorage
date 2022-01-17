import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import react, { useState, useEffect } from "react";

import Header from "./components/appheader/Header.js";
import LoginForm from "./components/login/LoginForm.js";
import StudentForm from "./components/studentInfo/StudentForm.js";
import StudentInfoCard from "./components/studentInfo/StudentInfoCard.js";
import Home from "./Home";
import EditStudentInfoCard from "./components/studentInfo/EditStudentInfoCard";
import { MyAuthcontext } from "./components/Context.js";
import Main from "./components/tasks/Main";
import ViewStudentData from "./components/studentInfo/ViewStudentData";
import Logout from "./components/logout/Logout";

function App() {
  const [loading, setloading] = useState(true); // Pre-loader before page renders
  // Pre-loader
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3500);
  }, []);
  // All States
  const [auth, setAuth] = useState({
    isAuth: false,
    authFunction: updateAuthState,
  });
  function updateAuthState(val) {
    setAuth({
      ...auth,
      isAuth: val,
    });
    console.log("value", val);
  }
  return (
    <>
      {loading ? (
        <div>
          <div style={{ marginTop: "200px" }} className="spinnerContainer ">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <MyAuthcontext.Provider value={auth}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Tasks" component={Main} />
              <Route path="/login" component={LoginForm} />
              <Route path="/studentinfo" component={StudentInfoCard} />
              <Route path="/add/student" component={StudentForm} />
              <Route path="/edit/student/:id" component={EditStudentInfoCard} />
              <Route path="/view/student/:id" component={ViewStudentData} />
              <Route path="/logout" component={Logout} />
            </Switch>
          </MyAuthcontext.Provider>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
