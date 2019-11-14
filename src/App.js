import React from 'react';
import './App.css';
import Home from './Page/Home';
import Routes from './Components/Routes';
import Header from './Components/header';
import {HashRouter as Router} from 'react-router-dom';

function App() {
  
  return (
    <Router>
       
    <div className="App"> 
    <Routes/>
    </div>
    </Router>
  );
}

export default App;
