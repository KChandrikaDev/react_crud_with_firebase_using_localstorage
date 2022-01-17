import React, { useEffect, useState } from "react";
import FileUpload from "../FileUpload";
import HOC from "../HOC";
import { useParams, useHistory } from "react-router-dom";

function EditStudentInfoCard() {
  const history = useHistory();
  const { id } = useParams();
  console.log("id",id);

  const [editData, setEditData] = useState({});

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("formAdded"));
    let filterData = getData.filter((edit) => {
      return edit.id === id;
    });
    // if (filterData.length > 0 ) {
    setEditData(...filterData);

    // }
    // eslint-disable-next-line
  }, []);

  console.log("data", editData);

  const onInputChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const lsData = JSON.parse(localStorage.getItem("formAdded"));
    let editFormData = lsData.filter((obj) => {
      return obj.id !== id;
    });
    editFormData.push(editData);
    localStorage.removeItem("formAdded");
    localStorage.setItem("formAdded", JSON.stringify(editFormData));
    history.push("/studentinfo");
  };

  return (
    <section className="mt-10 container-fluid ">
      <section className="row justify-content-center">
        <section className="col-12 col-sm-6 col-md-3">
          <form onSubmit={(e) => onSubmit(e)}>
            <h1
              style={{ marginBottom: "10px" }}
              className="text-white text-center"
            >
              Edit Form
            </h1>
            <div className="mb-3 me-2 ms-2">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="fname"
                value={editData.fname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3 me-2 ms-2">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Last name"
                name="lname"
                value={editData.lname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3 me-2 ms-2">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email "
                name="email"
                value={editData.email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3 me-2 ms-2">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Phone"
                name="phone"
                value={editData.phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <FileUpload />
            <button
              style={{ width: "95%" }}
              type="submit"
              className="btn btn-primary justify-content-center ms-2 me-6 mb-5"
            >
              Save
            </button>
          </form>
        </section>
      </section>
    </section>
  );
}

export default HOC(EditStudentInfoCard);
