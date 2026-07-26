import "./Footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaSearchLocation,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-elements">
          <Link to="/" className="logo">
            <img
              src={logo}
              alt="Dov Solar Energy Logo"
              className="logo-image"
            />
          </Link>
        </div>

        {/* Company Links */}
        <div className="footer-elements">
          <h2>Our Company</h2>

          <Link to="/">Home</Link>
          <Link to="/AboutUs">About Us</Link>
          <Link to="/Achievements">Our Achievements</Link>
          <Link to="/Services">Services</Link>
          <Link to="/Contact">Contact</Link>
        </div>

        {/* Services */}
        <div className="footer-elements">
          <h2>Services</h2>

          <Link to="/Services">Solar Energy</Link>
          <Link to="/Services">IT Solutions</Link>
          <Link to="/Services">Electronics</Link>
        </div>

        {/* Contact */}
        <div className="footer-elements">
          <h2>Contact Us</h2>

          <p>
            <FaPhoneAlt />
            &nbsp;+237 670 245 805
          </p>

          <p>
            <FaPhoneAlt />
            &nbsp;+237 699 802 824
          </p>

          <p>
            <FaPhoneAlt />
            &nbsp;+237 698 765 568
          </p>

          <p>
            <FaEnvelope />
            &nbsp;dovsolarenergy@gmail.com
          </p>

          <p>
            <FaSearchLocation />
            &nbsp;Kribi, Cameroon
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Dov Solar Energy. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;