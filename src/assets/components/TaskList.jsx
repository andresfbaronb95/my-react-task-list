import React, { useState } from 'react';

function TaskList({ list }) {
  

  const [taskName, setTaskName] = useState(''); // Estado para el nombre de la tarea
  const [taskDescription, setTaskDescription] = useState(''); // Estado para la descripción de la tarea

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (taskName.length < 3) {
      alert('El nombre de la tarea debe tener al menos 3 caracteres.');
      return;
    }

    
    const newTask = {
      name: taskName,
      description: taskDescription,
    };

    
    setList([...list, newTask]);

    
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <div>
      {/* Lista de tareas existente */}
      {/* ... */}

      {/* Formulario para agregar una nueva tarea */}
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de la tarea:
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Descripción de la tarea (opcional):
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Guardar Tarea</button>
      </form>
    </div>
  );
}

export default TaskList;
   