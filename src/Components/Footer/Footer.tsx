import './Footer.css'
import logo from '../../assets/logo.png'
import { FaPhoneAlt,FaEnvelope,FaLocationArrow,FaSearchLocation } from 'react-icons/fa';

function Footer(){
    return(
        <> 
            <div className="footer"> 
                <div className='footer-container'>

                    <div className='footer-elements'>
                        <a href="/" className="logo">
                            <img src={logo} alt="Solar Logo" className="logo-image" />
                        </a>
                    </div>

                    <div className='footer-elements'>
                        <h2>Our Company</h2>
                        <a href="/Home" >Home</a>
                        <a href="/AboutUs" >About Us</a>   
                        <a href="/Achievements" >Our Achievements</a>    
                        <a href="/Services" >Services</a>
                        {/*<a href="/Products Catalog" >Products Catalog</a>*/}
                        <a href="/Contact" >Contact</a>
                    </div>

                    <div className='footer-elements'>
                        <h2>Services</h2>
                        <a href="#solar energy">Solar Energy</a>
                        <a href="#it solutions">IT Solutions </a>
                        <a href="#electronics">Electronics</a>
                    </div>

                    <div className="footer-elements">
                         <h2>Contact Us</h2>
                         <p><FaPhoneAlt /> (+237)670-245-805/699-802-824/698-765-68</p>
                         <p><FaEnvelope/>dovsolarenergy@gmail.com</p>
                         <p><FaSearchLocation/>Kribi, Cameroon</p>
                    </div>

                </div>

                <div className="footer-bottom">
                     © 2026 Dov Solar Energy. All Rights Reserved.
                </div>
            </div>
        </>
    );
}

export default Footer;