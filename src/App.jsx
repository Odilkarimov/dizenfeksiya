import Navbar from "./components/navbar";
import Footer from "./components/pages/footer";
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
      <div className="mt-[100px]">
        <Footer />
      </div>
    </div>
  );
};

export default App;
