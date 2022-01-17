import { useState } from "react";
import Swal from "sweetalert2";

const AddTask = ({ onSave }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text && !day) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your task and date or close the form!",
      });
    } else if (!text && day) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your task!",
      });
    } else if (text && !day) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your date!",
      });
    } else {
      onSave({ text, day });
    }

    setText("");
    setDay("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div
        style={{ borderRadius: "10px", width: "98%" }}
        className="form-control ms-2 me-2 "
      >
        <label>Task</label>
        <input
          style={{ borderRadius: "5px", width: "98%" }}
          type="text"
          placeholder="task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div
        style={{ borderRadius: "10px", width: "98%" }}
        className="form-control ms-2 me-2 "
      >
        <label>Day & Time</label>
        <input
          style={{ borderRadius: "5px", width: "98%" }}
          type="text"
          placeholder="day & time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <input
        style={{ width: "98%" }}
        type="submit"
        className="btn btn-block pe-2 ps-2 mb-3 me-s ms-2"
        value="Save Task"
      />
    </form>
  );
};

export default AddTask;
