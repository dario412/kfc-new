import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Pocetna from "./components/pages/pocetna/Pocetna";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/pages/meni/Menu";
import SingleProduct from "./components/pages/singleProduct/SingleProduct";
import Blog from "./components/pages/Blog/Blog";
import Contact from "./components/pages/pocetna/Contact/contact";
import Kariera from "./components/pages/kariera/Kariera";
import Map from "./components/pages/map/Map";
import SingleBlog from "./components/pages/single blog/SingleBlog";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/meni" element={<Menu />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/kariera" element={<Kariera />} />
          <Route path="/single" element={<SingleProduct />} />
          <Route path="/novosti" element={<Blog />} />
          <Route path="/map" element={<Map/>} />
          <Route path="/single-blog" element={<SingleBlog/>} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
  }

export default App;
