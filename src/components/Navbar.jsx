//fire
import "../index.css"
import { Link } from "react-router-dom";
import "../css/Navbar.css"
function Navbar() {
  return (
    <div>
     
      <div className="containNav">
     
      <ul className="navContainer">
      <li className="navItem" id="LogoText"><h1 id="logoText">Mike DeLucia</h1></li>
        <li className="navItem">
          
        <Link to="/home">Home</Link>
      </li>
      <li className="navItem">
        <Link to="/about">About</Link>
      </li>
      <li className="navItem">
        <Link to="/">Projects</Link>
      </li>
      <li className="navItem">
        <Link to="/">Contact</Link>
        </li>
        </ul>
      </div>
      </div>
);
}

export default Navbar