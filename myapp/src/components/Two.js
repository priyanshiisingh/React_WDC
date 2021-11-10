import React from "react";
import { useSelector } from "react-redux";

const Two = ({ data }) => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div>
      <h1>i'm component two</h1>
    </div>
  );
};

export default Two;
