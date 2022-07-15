import Navbar from "./components/UI/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Goats from "./components/Goats";
import Gallery from "./components/Gallery";
// import Footer from './components/UI/Footer';
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/goats" element={<Goats />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
