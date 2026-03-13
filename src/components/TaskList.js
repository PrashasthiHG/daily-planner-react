import TaskItem from "./TaskItem";
import "../css/TaskList.css";
function TaskList({ tasks, toggleTask, deleteTask, editTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;