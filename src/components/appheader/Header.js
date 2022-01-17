import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {MyAuthcontext} from '../Context'

function Header() {
  const authContext = useContext(MyAuthcontext);
  const logoutHandler = () => {
    authContext.authFunction(false);
    localStorage.removeItem('user');
  }
  return (
    <div className="topnav ">
      <Link className="nav-link" to="/">
        <strong> <i className="fa fa-graduation-cap fa-2x" ></i>
        </strong>
      </Link>
      <div className="topnav-right">
        <Link className="nav-link" to="/">
          <i className="fa fa-home"></i>
          <strong>Home</strong>
        </Link>
        <Link className="nav-link" to="/tasks">
        <i className="fa fa-tasks" aria-hidden="true"></i>
          <strong>Tasks</strong>
        </Link>
        <Link className="nav-link" to="/studentinfo">
          <i className="fa fa-info-circle"></i>
          <strong>Student Info</strong>
        </Link>
        <Link className="nav-link" to="/add/student">
          <i  className="fa fa-plus-circle"></i>
          <strong>Add Student</strong>
        </Link>
        {authContext.isAuth ? (
            <Link className="nav-link" onClick={logoutHandler} to="/logout">
            <i className="fa fa-fw fa-user"></i>
            <strong>Logout</strong>
          </Link>
         ) : (
            <Link className="nav-link" to="/login">
          <i className="fa fa-fw fa-user"></i>
          <strong>Login</strong>
        </Link>
          )}
      </div>
    </div>
  );
}


export default Header;
