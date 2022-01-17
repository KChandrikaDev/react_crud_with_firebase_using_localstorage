import React, { useEffect, useState } from "react";
import FileUpload from "../FileUpload";
import HOC from "../HOC";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function ViewStudentCard() {
  const history = useHistory();
  const { id } = useParams();
  console.log("id", id);

  const [viewData, setViewData] = useState({});

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("formAdded"));
    let filterData = getData.filter((view) => {
      return view.id === id;
    });
    // if (filterData.length > 0 ) {
    setViewData(...filterData);

    // }
    // eslint-disable-next-line
  }, []);

  console.log("data", viewData);

  return (
    <section className="mt-10 container-fluid ">
      <section className="row justify-content-center">
        <section className="col-12 col-sm-6 col-md-3">
          <form>
            <h4
              style={{ marginBottom: "10px" }}
              key={viewData.id}
              className="text-primary text-center "
            >
              Student Information
            </h4>
            <div className=" me-2 ms-2">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="First name"
                name="fname"
                value={viewData.fname}
                // onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3 me-2 ms-2">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder=" Last name"
                name="lname"
                value={viewData.lname}
                // onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3 me-2 ms-2">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email "
                name="email"
                value={viewData.email}
                // onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3 me-2 ms-2 ">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control mt-1"
                placeholder="Phone"
                name="phone"
                value={viewData.phone}
                // onChange={(e) => onInputChange(e)}
              />
            </div>
{/* 
            <div className="ps-2 text-white">
              <input
                type="file"
              />
              <img src={viewData.baseImage} height="100px" /> 
            </div>  */}
            <Link className="link pt-2" to={"/studentinfo"}>
              <button
                style={{ width: "95%" }}
                className="btn btn-primary justify-content-center m-2 mb-5"
              >
                <i class="fa fa-reply" aria-hidden="true"></i>
                <i class="fa fa-reply" aria-hidden="true"></i>
                <i class="fa fa-reply" aria-hidden="true"></i>
              </button>
            </Link>
          </form>
        </section>
      </section>
    </section>
  );
}

export default HOC(ViewStudentCard);
