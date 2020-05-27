import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Productos from './components/Productos';


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Productos}/> 
        <Route exact path="/productos/nuevo" />
      </Switch>
    </Router>
  );
}

export default App;
