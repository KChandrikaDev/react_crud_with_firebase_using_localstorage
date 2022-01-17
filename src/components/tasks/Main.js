// Importing Components
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
// Importing React Hooks
import { useState, useEffect } from "react";
// Importing Packages
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import HOC from "../HOC";

function Main() {
  // All States

  const [tasks, setTasks] = useState([]); // Task State
  const [showAddTask, setShowAddTask] = useState(false); // To reveal add task form

  // Fetching from Local Storage
  const getTasks = JSON.parse(localStorage.getItem("taskAdded"));

  useEffect(() => {
    if (getTasks == null) {
      setTasks([]);
    } else {
      setTasks(getTasks);
    }
    // eslint-disable-next-line
  }, []);

  // Add Task
  const addTask = (task) => {
    const id = uuidv4();
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);

    Swal.fire({
      icon: "success",
      title: "Yay...",
      text: "You have successfully added a new task!",
    });

    localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));
  };

  // Delete Task
  const deleteTask = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);

    setTasks(deleteTask);

    Swal.fire({
      icon: "success",
      title: "Oops...",
      text: "You have successfully deleted a task!",
    });

    localStorage.setItem("taskAdded", JSON.stringify(deleteTask));
  };

  // Edit Task
  const editTask = (id) => {
    const text = prompt("Task Name");
    const day = prompt("Day Of Completion");
    let data = JSON.parse(localStorage.getItem("taskAdded"));

    const myData = data.map((x) => {
      if (x.id === id) {
        return {
          ...x,
          text: text,
          day: day,
          id: uuidv4(),
        };
      }
      return x;
    });
    Swal.fire({
      icon: "success",
      title: "Yay...",
      text: "You have successfully edited an existing task!",
    });

    localStorage.setItem("taskAdded", JSON.stringify(myData));
    window.location.reload();
  };
  return (
    <>
      <div style={{ maxWidth: "80%" }} className="container">
        {/* App Header that has open and App Name */}

        <Header
          showForm={() => setShowAddTask(!showAddTask)}
          changeTextAndColor={showAddTask}
        />

        {/* Revealing of Add Task Form */}
        {showAddTask && <AddTask onSave={addTask} />}

        {/* Task Counter */}
        <h3>Number of Tasks: {tasks.length}</h3>

        {/* Displaying of Tasks */}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
        ) : (
          "No taskes were Found!"
        )}
      </div>
    </>
  );
}

export default HOC(Main);
