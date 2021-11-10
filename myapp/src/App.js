import { useState } from "react";
import Description from "./components/Description";
import One from "./components/One";
import Two from "./components/Two";

const App = () => {
  const [data, setData] = useState({ password: "abcd" }, { password: "1234" });

  return (
    <div className="App">
      <One data={data} />
      <Two />
    </div>
  );
};

export default App;
