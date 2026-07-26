import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* Left side */}
      <Link to="/" className="logo">
        <img
          src={logo}
          alt="Dov Solar Energy Logo"
          className="logo-image"
        />

        <p className="logo-text">Dov Solar Energy</p>
      </Link>

      {/* Right side */}
      <Navbar />
    </header>
  );
}

export default Header;