import Navbar from "./components/navbar";
import Home from "./components/pages/home";

const App = () => {
  return (
    <div className="container-box">
      <div className="shadow">
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
};

export default App;
