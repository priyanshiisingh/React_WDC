import ListItem from "./listitem";
import { useState } from "react";

const Content = () => {
  // request the API for data
  // let counter = 0
  let [counter, setCounter] = useState(0);
  let [items, setitems] = useState([]);

  // console.log(counter);
  // console.log(mysteryfunc);

  console.log("re rendering");

  return (
    <div className="container">
      <h2>{counter}</h2>
      <button
        onClick={() => {
          // console.log(counter);
          // counter = counter + 1;
          setCounter((previousValue) => {
            console.log(previousValue);
            return previousValue + 1;
          });
        }}>
        ClickMe
      </button>
    </div>
  );
};

export default Content;

// import React from "react";

// class ClassComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   render() {
//     return (
//       <div className="container">
//         {/* <h2>{counter}</h2>
//             <button onClick={() => {
//                 console.log(counter)
//                 counter = counter + 1
//             }} >ClickMe</button> */}
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, cum?
//       </div>
//     );
//   }
// }

// export default ClassComponent;
