import React, { useContext } from "react";
import { MyAuthcontext } from "./Context";

import LoginForm from './login/LoginForm.js'
// import Logout from "./logout/Logout";

const HOC = (Comp) => {
  return class checkAuth extends React.Component {
    render() {
      return (
        <MyAuthcontext.Consumer>
          {(value) => {
            return <div>{value.isAuth ? <Comp /> : <LoginForm />}</div>;
          }}
        </MyAuthcontext.Consumer>
      );
    }
  };
};

export default HOC;