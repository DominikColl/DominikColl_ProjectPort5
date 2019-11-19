import React from 'react';
import './App.css';
import Routes from './Components/Routes';
import { HashRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>

      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
