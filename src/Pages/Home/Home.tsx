import './Home.css';
import panel from '../../assets/panel.jpg';
import { Link } from 'react-router-dom';
import nuno from '../../assets/nuno.jpg';
import aboutImage from '../../assets/about.jpg'
import it from '../../assets/it-service.jpg'
import electrical from '../../assets/electrical-service.jpg'
import { FaSolarPanel,FaLaptopCode,FaTv } from 'react-icons/fa'; 


function Home() {
    return (
        <div className="home">
            <div className="home-element">
                <img src={panel} alt="Solar Panel" className="S-Img"/>

                <div className="home-text">

                    <h1>
                        POWERING AFRICA
                        <br />
                        WITH CLEAN
                        <br />
                        ENERGY
                    </h1>

                    <p>
                        Reliable solar, IT and electrical
                        solutions for homes, businesses
                        and communities.
                    </p>

                    <div className="hero-buttons">

                        <Link
                            to="/AboutUs"
                            className="home-button"
                        >
                            Discover More
                        </Link>

                        <Link
                            to="/Contact"
                            className="quote-button"
                        >
                            Get a Quote
                        </Link>

                    </div>
           
            </div>

        </div>    

                {/* Who We Are */}

        <section className="home-about">

            <div className="home-about-image">

                <img
                    src={aboutImage}
                    alt="Dov Solar Energy"
                />

            </div>

            <div className="home-about-text">

                <h4>WHO WE ARE</h4>

                <h2>
                    Delivering Sustainable
                    Energy Solutions
                    Since 2020
                </h2>

                <p>

                    Dov Solar Energy is an innovative company based in
                    Kribi, Cameroon, specializing in photovoltaic solar
                    systems, electrical installations, electronics and
                    IT solutions.

                    Since our creation in 2020, we have successfully
                    completed projects ranging from residential solar
                    systems to hybrid installations, mini power plants
                    and public lighting projects.

                </p>

                <Link
                    to="/AboutUs"
                    className="about-button"
                >
                    Learn More
                </Link>

            </div>

        </section>

                {/* Why Choose Us */}

        <section className="why-section">

            <h2>Why Choose Dov Solar Energy?</h2>

            <p className="why-subtitle">
                We provide reliable, innovative and sustainable solutions
                that empower homes, businesses and communities with clean energy.
            </p>

            <div className="why-grid">

                <div className="why-card">

                    <div className="why-icon">☀</div>

                    <h3>Renewable Energy</h3>

                    <p>
                        Clean and efficient photovoltaic systems
                        designed for long-term performance.
                    </p>

                </div>

                <div className="why-card">

                    <div className="why-icon">🛠</div>

                    <h3>Professional Installation</h3>

                    <p>
                        Every installation is completed with precision,
                        safety and attention to detail.
                    </p>

                </div>

                <div className="why-card">

                    <div className="why-icon">💡</div>

                    <h3>Innovative Solutions</h3>

                    <p>
                        Modern technologies adapted to the needs of
                        homes, businesses and public institutions.
                    </p>

                </div>

                <div className="why-card">

                    <div className="why-icon">🤝</div>

                    <h3>Customer Support</h3>

                    <p>
                        From consultation to maintenance,
                        we remain by your side throughout every project.
                    </p>

                </div>

            </div>

        </section>

            {/*services card*/}  

        <section className="services">
            <h1>Our Services</h1>
            <br/>
                <div className="services-container">

                    <div className="service-card">

                        <img src={nuno} alt="Solar Panel" className="image">  
                        </img>

                        <div className="service-content"> 

                            <h2><FaSolarPanel/>  Solar Energy</h2>

                            <p>Design, installation and maintenance of photovoltaic systems,
                                public lighting and solar equipment.
                            </p>

                            {/*<button className='learn-button'>Learn More</button>*/}

                        </div> 

                    </div>

                    <div className="service-card">

                            <img src={it} alt="Solar Panel" className="image">  
                            </img>

                         <div className="service-content">   

                            <h2><FaLaptopCode/>  IT Solutions</h2>

                            <p> Design, installation and maintenance of computer systems,
                                networks and video surveillance.
                            </p>

                           {/*} <button className='learn-button'>Learn More</button>*/}

                         </div>  

                    </div>

                    <div className="service-card">

                        <img src={electrical} alt="Solar Panel" className="image">  
                        </img>

                        <div className="service-content">

                            <h2><FaTv/>  Electronics</h2>

                            <p> Installation and maintenance of electronic equipment,
                                televisions, regulators and home cinema systems.
                            </p>

                            {/*<button className='learn-button'>Learn More</button>*/}

                        </div>

                    </div>

                </div>
        </section>

                {/* Our Impact */}

        <section className="impact-section">

            <h2>Our Impact Since 2020</h2>

            <p className="impact-subtitle">
                Every project reflects our commitment to delivering reliable,
                innovative and sustainable energy solutions throughout Cameroon.
            </p>

            <div className="impact-grid">

                <div className="impact-card">

                    <h1>2020</h1>

                    <h3>Company Founded</h3>

                    <p>
                        Beginning our journey in renewable energy.
                    </p>

                </div>

                <div className="impact-card">

                    <h1>35</h1>

                    <h3>Solar Street Lights</h3>

                    <p>
                        Installed in the city of Lolodorf.
                    </p>

                </div>

                <div className="impact-card">

                    <h1>15 kW</h1>

                    <h3>Largest Mini Solar Plant</h3>

                    <p>
                        Successfully installed in the Commune of
                        MVENGUE.
                    </p>

                </div>

                <div className="impact-card">

                    <h1>5+</h1>

                    <h3>Years of Experience</h3>

                    <p>
                        Designing and installing reliable
                        photovoltaic solutions.
                    </p>

                </div>

            </div>

        </section>
                    {/* Call To Action */}

        <section className="cta-section">

            <h2>Ready to Power Your Home or Business?</h2>

            <p>
                Whether you're looking for solar energy,
                IT solutions or electrical services,
                our experts are ready to help you build
                reliable and sustainable solutions.
            </p>

            <div className="cta-buttons">

                <Link
                    to="/Contact"
                    className="cta-primary"
                >
                    Request a Quote
                </Link>

                <Link
                    to="/Services"
                    className="cta-secondary"
                >
                    Explore Services
                </Link>

            </div>

        </section>
           

        </div>
    );
}

export default Home;