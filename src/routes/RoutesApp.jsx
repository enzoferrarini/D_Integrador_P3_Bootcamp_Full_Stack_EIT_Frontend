import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../layout/NavBar";
import Home from "../pages/Home";
import Footer from "../layout/Footer";
import AddProduct from "../pages/AddProduct";
import Contact from "../pages/Contact";
import Us from "../pages/Us";
import Sticky from "../components/Sticky";
import { StickyContext } from "../context/StickyContext";

const RoutesApp = () => {
  const { showSticky, msgSticky, extraMsgSticky } = useContext(StickyContext);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addProduct" element={<AddProduct/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/us" element={<Us/>}/>
      </Routes>
      <Footer/>
      <Sticky show={showSticky} msg={msgSticky} extraMsg={extraMsgSticky}/>      
    </Router>
  );
};

export default RoutesApp;
