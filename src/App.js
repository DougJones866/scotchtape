import Navbar from "./components/UI/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Goats from "./components/Goats";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from './components/UI/Footer';
import "./App.module.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBatteryHalf, faBatteryFull, faPrint } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faBatteryHalf, faBatteryFull, faPrint);


function App() {

  return (
    <div>
      
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/goats" element={<Goats />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
        
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
