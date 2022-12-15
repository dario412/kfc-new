import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Pocetna from "./components/pages/pocetna/Pocetna";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/pages/pocetna/Contact/contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
