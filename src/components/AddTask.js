import { useState } from "react";
import "../css/AddTask.css";
function AddTask({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (!task.trim()) return;
    addTask(task);
    setTask("");
  };

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task...."
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddTask;