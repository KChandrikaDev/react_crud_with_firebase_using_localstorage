import React, { useState, useEffect } from "react";
import FileUpload from "../FileUpload";
import { useHistory } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import HOC from "../HOC";
export const id = uuidv4();

function StudentForm() {
  const history = useHistory();

  const [data, setData] = useState([]);

  // initial values
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [baseImage, setBaseImage] = useState("");

  //error
  const [fnameErr, setFnameErr] = useState({});
  const [lnameErr, setLnameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [phoneErr, setPhoneErr] = useState({});
  const getData = JSON.parse(localStorage.getItem("formAdded"));

  useEffect(() => {
    if (getData == null) {
      setData([]);
    } else {
      setData(getData);
    }
    // eslint-disable-next-line
  }, []);
  console.log("Data", data);

  // const uploadImage = async (e) => {
  //   const file = e.target.files[0];
  //   const base64 = await convertBase64(file);
  //   setBaseImage(base64);
  // };

  // console.log("baseImage", baseImage);
  // // localStorage.setItem("Image", JSON.stringify(baseImage));

  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValid();
    if (isValid) {
      if (fname && lname && email && phone) {
        const newForm = { id, fname, lname, email, phone };
        setData([...data, newForm]);

        Swal.fire({
          icon: "success",
          title: "Yay...",
          text: "You have successfully added a new form!",
        });
        setFname("");
        setLname("");
        setEmail("");
        setPhone("");
        // setBaseImage("");
        localStorage.setItem("formAdded", JSON.stringify([...data, newForm]));
        history.push("/studentinfo");
      } else {
        Swal.fire({
          icon: "error",
          title: "OOPs...",
          text: "Please fill out all the fields",
        });
      }
    }
  };

  const formValid = () => {
    const fnameErr = {};
    const lnameErr = {};
    const emailErr = {};
    const phoneErr = {};
    let isValid = true;
    if (fname.trim().length < 5) {
      fnameErr.FirstNameShort = "First name is too short";
      isValid = false;
    }
    if (fname.trim().length > 10) {
      fnameErr.FirstNameLong = "First name is too long";
      isValid = false;
    }
    if (lname.trim().length < 5) {
      lnameErr.LastNameShortt = "Last name is too short";
      isValid = false;
    }
    if (lname.trim().length > 10) {
      lnameErr.LastNameLong = "Last name is too short";
      isValid = false;
    }
    if (typeof email !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email)) {
        isValid = false;
        emailErr.EmailValid = "*Please enter valid email-ID.";
      }
    }
    if (typeof phone !== "undefined") {
      if (phone.length !== 10) {
        isValid = false;
        phoneErr.validPhone = "*Please enter valid mobile no.";
      }
    }

    setFnameErr(fnameErr);
    setLnameErr(lnameErr);
    setEmailErr(emailErr);
    setPhoneErr(phoneErr);

    return ValidityState;
  };
  return (
    <section className="mt-10 container-fluid ">
      <section className="row justify-content-center">
        <section className="col-12 col-sm-6 col-md-3">
          <form onSubmit={onSubmit}>
            <h1
              style={{ marginBottom: "10px" }}
              className="text-white text-center"
            >
              Student Form
            </h1>
            <div className="mb-3 me-2 ms-2">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
              />
              {Object.keys(fnameErr).map((key) => {
                return (
                  <div key="{key}" style={{ color: "red" }}>
                    {fnameErr[key]}
                  </div>
                );
              })}
            </div>
            <div className="mb-3 me-2 ms-2">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Last name"
                value={lname}
                onChange={(e) => {
                  setLname(e.target.value);
                }}
              />
              {Object.keys(lnameErr).map((key) => {
                return (
                  <div key="{key}" style={{ color: "red" }}>
                    {lnameErr[key]}
                  </div>
                );
              })}
            </div>
            <div className="mb-3 me-2 ms-2">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email "
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {Object.keys(emailErr).map((key) => {
                return (
                  <div key="{key}" style={{ color: "red" }}>
                    {emailErr[key]}
                  </div>
                );
              })}
            </div>
            <div className="mb-3 me-2 ms-2">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              {Object.keys(phoneErr).map((key) => {
                return (
                  <div key="{key}" style={{ color: "red" }}>
                    {phoneErr[key]}
                  </div>
                );
              })}
            </div>
            {/* <div className="ps-2 text-white">
              <input
                type="file"
                onChange={(e) => {
                  uploadImage(e);
                }}
              />
              <img src={baseImage} height="100px" />
            </div> */}

            <button
              style={{ width: "95%" }}
              type="submit"
              className="btn btn-primary justify-content-center ms-2 me-6 mb-5"
            >
              Submit
            </button>
          </form>
        </section>
      </section>
    </section>
  );
}

export default HOC(StudentForm);
