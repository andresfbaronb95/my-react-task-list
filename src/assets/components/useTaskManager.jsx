import { useState } from 'react';

function useTaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (name, description) => {
    // Lógica para agregar una tarea
    const newTask = { name, description };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    // Lógica para borrar una tarea
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const updateTask = (index, newName, newDescription) => {
    // Lógica para actualizar una tarea
    const updatedTasks = [...tasks];
    updatedTasks[index] = { name: newName, description: newDescription };
    setTasks(updatedTasks);
  };

  return { tasks, addTask, deleteTask, updateTask };
}

export default useTaskManager;
