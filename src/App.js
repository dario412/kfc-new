import './App.css';
import React from "react";
import Navbar from './components/Navbar'
import Pocetna from './components/pages/pocetna/Pocetna';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return(
      <ThemeProvider theme={theme}>
      <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Pocetna />} />
          </Routes>
        </Router>
        </ThemeProvider>
    );
}

export default App;
