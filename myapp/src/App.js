import { useState } from "react";
import { useSelector } from "react-redux";
import Details from "./components/Details";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="App">
      <Products />
      <Details />
    </div>
  );
};

export default App;
