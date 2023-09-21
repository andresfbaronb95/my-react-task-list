import React from 'react';

function Tareas() {
  // Supongamos que tienes un array de tareas
  const tareas = ["Lavar la ropa", "Sacar la basura", "Hacer la compra"];

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tareas;
