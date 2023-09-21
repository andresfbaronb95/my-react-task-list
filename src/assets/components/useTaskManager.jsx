import { useState } from 'react';

function useTaskManager() {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    // Agregar lógica para crear una tarea aquí
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    // Agregar lógica para eliminar una tarea aquí
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const updateTask = (taskId, updatedTask) => {
    // Agregar lógica para actualizar una tarea aquí
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  return {
    tasks,
    createTask,
    deleteTask,
    updateTask,
  };
}

export default useTaskManager;
