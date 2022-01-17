import React from "react";
import "./Logout.css";

function Logout() {
  return (
    <>
    <div id="logout" class="row">
      <div class="col-sm-10 mt-5  col d-flex justify-content-center">
        <h1 style={{ fontWeight: "900" }} className="font-weight-bold">
          {" "}
          Please login for access your details...
        </h1>
      </div>
    </div>
  </>
  );
}

export default Logout;
