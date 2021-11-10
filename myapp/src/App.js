import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import Content from "./components/content";
import Description from "./components/Description";

const App = () => {
  console.log(Description);
  return (
    <div className="App">
      <Description heading={"heading"} />
    </div>
  );
};

export default App;
