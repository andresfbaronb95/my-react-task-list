import './App.css';
import Header from './assets/components/Header';
import TaskList from './assets/components/TaskList';

function App() {
  let myList = ["Lavar la ropa", "Sacar la basura"];
  return (
    <>
      <Header />
      <TaskList list={myList} />
    </>
  )
}

export default App
 