import React from 'react';
import Task from "./Task";

function TaskList({ list }) {
    return (
        <ul className="task-list">
        {list.map((task, index) => (
          <li key={index} className="task-item">
            <input type="checkbox" checked={task.completed} />
            <span>{task.description}</span>
          </li>
        ))}
      </ul>
      
    );
  }
    
  export default TaskList 