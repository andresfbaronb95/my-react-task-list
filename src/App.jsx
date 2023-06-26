import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './assets/components/Header';
import TaskList from './assets/components/TaskList';

function App() {
  const [myList, setMyList] = useState(() => {
    const storedList = localStorage.getItem('taskList');
    return storedList ? JSON.parse(storedList) : [];
  });

  useEffect(() => {
    const storedList = localStorage.getItem('taskList');
    if (storedList) {
      setMyList(JSON.parse(storedList));
    }
  }, []);

  const addTask = () => {
    const taskName = window.prompt('Ingrese el nombre de la tarea');
    if (taskName) {
      const newTask = {
        description: taskName.trim(),
        completed: false
      };
      setMyList([...myList, newTask]);
      localStorage.setItem('taskList', JSON.stringify([...myList, newTask]));
    }
  };

  return (
    <div className="app">
      <Header />
      <TaskList list={myList} />
      <button onClick={addTask}>Agregar Tarea</button>
    </div>
  );
}

export default App;