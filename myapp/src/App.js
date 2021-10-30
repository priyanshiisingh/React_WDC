import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import Content from "./components/content";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
