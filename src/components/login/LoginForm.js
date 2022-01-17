import React, { useContext, useState, useEffect } from "react";
import "./LoginForm.css";
import { MyAuthcontext } from "../Context";
import { useHistory } from "react-router";

function LoginForm() {
  const history = useHistory();
  const authContext = useContext(MyAuthcontext);

  useEffect(() => {
    if ("user" in localStorage) {
      authContext.authFunction(true);
      history.push("/");
    }
  }, []);

  const [user, setUser] = useState({ email: "", password: "" });
  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Loged In");
    if (details.email && details.password) {
      console.log("log");
      setUser({
        email: details.email,
      });
      authContext.authFunction(true);
      history.push("/");
      console.log("user", user);
      localStorage.setItem("user", JSON.stringify({ email: details.email }));
    } else if (details.email === "" && details.password === "") {
      setError("Please enter Email ID and Password ");
    }
  };
  return (
    <section className="mt-5 container-fluid">
      <section className="row justify-content-center">
        <section className="col-12 col-sm-6 col-md-3">
          <form onSubmit={submitHandler}>
            <h1
              style={{ marginBottom: "10px" }}
              className="text-white text-center"
            >
              Login Form
            </h1>
            {error !== "" ? <div className="error">{error}</div> : ""}
            <div className="mb-3 me-2 ms-2">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email "
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
            </div>
            <div className="mb-3 me-2 ms-2">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
            </div>

            <input
              style={{ width: "95%" }}
              className="btn btn-primary justify-content-center ms-2 me-6 mb-5"
              type="submit"
              value="Login"
            />
          </form>
        </section>
      </section>
    </section>
  );
}

export default LoginForm;
