import './App.css';
import Header from './assets/components/Header';
import TaskList from './assets/components/TaskList';

// Importa el hook personalizado
import useTaskManager from './useTaskManager';

function App() {
  // Utiliza el hook personalizado
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager();

  return (
    <>
      <Header />
      <TaskList list={tasks} /> {/* Utiliza la lista de tareas del hook */}
    </>
  );
}

export default App;
