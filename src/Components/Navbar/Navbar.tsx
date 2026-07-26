import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About</Link>
        <Link to="/Achievements">Achievements</Link>
        <Link to="/Services">Services</Link>
        {/* <Link to="/ProductsCatalog">Products Catalog</Link> */}
        <Link to="/Contact">Contact</Link>
      </nav>

      {/*
      <div className="buttons">
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      */}
    </>
  );
}

export default Navbar;



