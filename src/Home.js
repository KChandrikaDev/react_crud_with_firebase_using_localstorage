import React from "react";
import HOC from "./components/HOC";
import "./Home.css";

function Home() {
  return (
    <>
      <div id="home" className="row">
        <div className="col-sm-10 mt-5  col d-flex justify-content-center">
          <h1 style={{ fontWeight: "900" }} className="font-weight-bold">
            Well Come to World of Creative Work...
          </h1>
        </div>
      </div>
    </>
  );
}

export default HOC(Home);
