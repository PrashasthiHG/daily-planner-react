import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import "./App.css";
function App() {

  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = tasks.filter((t) => !t.completed).length;
  // useEffect(() => {
  //   const saved = JSON.parse(localStorage.getItem("tasks"));
  //   if (saved) setTasks(saved);
  // }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { text: text, completed: false }]);
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <h2>DAILY PLANNER</h2>
        <div className="task-stats">
          <span>Total: {totalTasks}</span>
          <span>Completed: {completedTasks}</span>
          <span>Pending: {pendingTasks}</span>
        </div>

        <AddTask addTask={addTask} />

        <Filter setFilter={setFilter} />

        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
        </div>
      </div>
  );
}

export default App;