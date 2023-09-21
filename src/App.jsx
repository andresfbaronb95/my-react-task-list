import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import SobreNosotros from './SobreNosotros';
import Tareas from './Tareas';
import Menu from './Menu';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/sobre-nosotros" component={SobreNosotros} />
        <Route path="/tareas" component={Tareas} />
      </div>
    </Router>
  );
}

export default App;
