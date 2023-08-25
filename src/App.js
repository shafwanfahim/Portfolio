import React from 'react'; 
import Navbar from './components/Navbar';  
import Home from './pages/Home';  
import{BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
 <div className='App'>
  <Router>
  <Navbar /> 
  <Switch>
    <Route path="/" exact Component={Home} />
  </Switch>
  </Router>
 </div>
  );
}

export default App;
