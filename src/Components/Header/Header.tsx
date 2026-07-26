import Navbar from '../Navbar/Navbar';
import logo from '../../assets/logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      {/*left side*/}
      <a href="/Home" className="logo">
        <img src={logo} alt="Solar Logo" className="logo-image" />

        <p className="logo-text">Dov Solar Energy</p>
      </a>

      {/*right side*/}
      <Navbar/>

    </header>
  );
}

export default Header;