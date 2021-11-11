import { useState } from "react";
import { useSelector } from "react-redux";
import List from "./components/List";
import AddItem from "./components/AddItem";

const App = () => {
  const items = useSelector((state) => state);
  console.log(items);
  return (
    <div className="App">
      <AddItem />
      <List />
    </div>
  );
};

export default App;
