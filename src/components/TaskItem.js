import { useState } from "react";
import "../css/TaskItem.css"
function TaskItem({ task, index, toggleTask, deleteTask, editTask }) {

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    editTask(index, newText);
    setIsEditing(false);
  };

  return (
    <li className={task.completed ? "completed" : ""}>

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(index)}
      />

      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{task.text}</span>
      )}

      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}

      <button onClick={() => deleteTask(index)}> Delete</button>

    </li>
  );
}

export default TaskItem;