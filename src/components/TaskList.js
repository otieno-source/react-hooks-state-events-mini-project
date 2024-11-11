import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task 
          key={task.text + task.category} // Unique key by combining text and category
          task={task} 
          onDeleteTask={onDeleteTask} 
        />
      ))}
    </div>
  );
}

export default TaskList;