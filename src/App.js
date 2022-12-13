import './App.css';
import React from "react";
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return(
    <div>
      <Router>
        <Navbar />
      </Router>
    </div>)
}

export default App;
