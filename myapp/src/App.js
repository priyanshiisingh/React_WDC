import { useState } from "react";
import { useSelector } from "react-redux";
import Details from "./components/Details";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:name" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
