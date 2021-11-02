// import ListItem from "./listitem";
// import { useState } from "react";

// const Content = () => {
//   // request the API for data
//   // let counter = 0
//   const counter = useState(0);
//   console.log(counter);

//   return (
//     <div className="container">
//       {/* <h2>{counter}</h2>
//       <button
//         onClick={() => {
//           console.log(counter);
//           counter = counter + 1;
//         }}>
//         ClickMe
//       </button> */}
//     </div>
//   );
// };

// export default Content;

import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="container">
        {/* <h2>{counter}</h2>
            <button onClick={() => {
                console.log(counter)
                counter = counter + 1
            }} >ClickMe</button> */}
      </div>
    );
  }
}

export default ClassComponent;
