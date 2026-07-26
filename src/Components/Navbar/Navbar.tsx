import './Navbar.css';
import { FaSearch } from 'react-icons/fa';

function Navbar() { 
 return (
    <>  
        <nav className="navbar">
            <a href="/Home" >Home</a>
            <a href="/AboutUs" >About Us</a>  
             <a href="/Achievements" >Our Achievements</a>       
            <a href="/Services" >Services</a>
           {/* <a href="/ProductsCatalog" >Products Catalog</a>*/}
            <a href="/Contact" >Contact</a>
        </nav>

       {/* <div className="buttons">
            <button className="search-button">
                <FaSearch/>
            </button>
        </div>*/}


    </>
    );
}

export default Navbar;



