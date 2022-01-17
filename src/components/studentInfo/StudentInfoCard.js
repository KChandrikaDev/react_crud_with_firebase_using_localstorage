import React, { useState, useEffect } from "react";
import "./StudentInfoCard.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import HOC from "../HOC";

function StudentInfoCard() {
  const [details, setDetails] = useState([]);
  // Fetching from Local Storage
  const getData = JSON.parse(localStorage.getItem("formAdded"));

  useEffect(() => {
    if (getData == null) {
      setDetails([]);
    } else {
      setDetails(getData);
    }
    // eslint-disable-next-line
  }, []);
  console.log("Details", details);

  // Delete data
  const deleteData = (id) => {
    console.log("id", id);
    const deleteData = details.filter((data) => data.id !== id);

    setDetails(deleteData);

    Swal.fire({
      icon: "success",
      title: "Oops...",
      text: "You have successfully deleted a task!",
    });

    localStorage.setItem("formAdded", JSON.stringify(deleteData));
  };
  return (
    <>
      <div className="row mt-5 ps-5 pe-5">
        {details.map((data) => (
          <div className="column mt-5 rounded ">
            <div
              style={{ minWidth: "100%" }}
              key={data.id}
              id="card"
              className="card"
            >
              <h4 className="text-primary ps-2">{`${data.fname} ${data.lname}`}</h4>
              <div className="row pt-2">
                <div className="col-md-5 span">FirstName</div>
                <div className="col-md-2 span">:</div>
                <div className="col-md-5 span">{data.fname}</div>
              </div>
              <div className="row pt-2">
                <div className="col-md-5 span">LastName</div>
                <div className="col-md-2 span">:</div>
                <div className="col-md-5 span">{data.lname}</div>
              </div>
              <div className="row pt-2">
                <div className="col-md-5 span">Email</div>
                <div className="col-md-2 span">:</div>
                <div className="col-md-5 span">{data.email}</div>
              </div>
              <div className="row pt-2">
                <div className="col-md-5 span">Phone</div>
                <div className="col-md-2 span">:</div>
                <div className="col-md-5 span">{data.phone}</div>
              </div>

              <Link className="link mt-2" to={`/view/student/${data.id}`}>
                <button
                  style={{ width: "100%" }}
                  className="btn btn-primary justify-content-center  me-2 "
                >
                  <i class="fa fa-eye" aria-hidden="true"></i>
                  View
                </button>
              </Link>

              <Link className="link mt-1" to={`/edit/student/${data.id}`}>
                <button
                  style={{ width: "100%" }}
                  className="btn btn-success justify-content-center  me-2 "
                >
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                  Edit
                </button>
              </Link>

              <button
                style={{ width: "100%" }}
                onClick={() => deleteData(data.id)}
                className="btn btn-danger justify-content-center  m-2 ps-2 pe-2"
              >
                <i class="fa fa-trash-o" aria-hidden="true"></i>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HOC(StudentInfoCard);
