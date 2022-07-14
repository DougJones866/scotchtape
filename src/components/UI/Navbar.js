import './Navbar.css';
import { Link } from "react-router-dom";



const Navbar = () => {

  return (
    <div>
      

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>        
          <li><Link to="/goats">Goats</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>    
          </ul>
      </nav>
      <div className="border"></div>
    </div>
  );
};

export default Navbar;
