import "./Services.css";
import { Link } from "react-router-dom";
import solar2 from "../../assets/solar2.jpg";
import it from "../../assets/it-service.jpg";
import electrical from "../../assets/electrical-service.jpg";

function Services() {
  return (
    <>
      {/* Hero Section */}

      <section className="services-hero">

        <img
          src={solar2}
          alt="Solar Energy"
          className="services-hero-image"
        />

        <div className="services-overlay"></div>

        <div className="services-title">

          <h3>OUR SERVICES</h3>

          <h1>
            Reliable Energy
            <br />
            & Technology
            <br />
            Solutions
          </h1>

          <p>
            Delivering innovative, reliable and sustainable
            solutions for homes, businesses and industries.
          </p>

        </div>

      </section>

      {/* Introduction */}

      <section className="services-introduction">

        <h2>Complete Solutions For Every Need</h2>

        <p>

          Dov Solar Energy offers comprehensive renewable energy,
          information technology and electrical solutions tailored
          to residential, commercial and industrial clients.

          Our experienced team combines innovation,
          professionalism and quality workmanship to deliver
          reliable projects from consultation to maintenance.

        </p>

      </section>

      {/* Solar Energy */}

      <section className="service-section">

        <div className="service-image">

          <img src={solar2} alt="Solar Energy" />

        </div>

        <div className="service-text">

          <h2>☀ Solar Energy</h2>

          <p>

            We design, install and maintain efficient
            photovoltaic systems that provide reliable,
            affordable and environmentally friendly energy.

          </p>

          <ul>

            <li>Photovoltaic Systems</li>

            <li>Hybrid Solar Systems</li>

            <li>Off-Grid Installations</li>

            <li>Backup Power Solutions</li>

            <li>Mini Power Plants</li>

            <li>Public Solar Lighting</li>

            <li>Maintenance & Repairs</li>

          </ul>

        </div>

      </section>

      {/* IT Solutions */}

<section className="service-section reverse">

    <div className="service-text">

        <h2>💻 IT Solutions</h2>

        <p>
            We provide professional IT services that help businesses
            improve productivity, security and communication through
            reliable technology solutions.
        </p>

        <ul>
            <li>Network Installation</li>
            <li>Computer Maintenance</li>
            <li>Server Configuration</li>
            <li>CCTV & Video Surveillance</li>
            <li>Technical Support</li>
            <li>Network Security</li>
            <li>Software Installation</li>
        </ul>

    </div>

    <div className="service-image">

        <img src={it} alt="IT Solutions" />

    </div>

</section>

{/* Electronics & Electrical */}

<section className="service-section">

    <div className="service-image">

        <img src={electrical} alt="Electrical Services" />

    </div>

    <div className="service-text">

        <h2>⚡ Electronics & Electrical</h2>

        <p>
            From building electrical installations to electronic
            equipment and maintenance, we provide complete solutions
            for residential, commercial and industrial customers.
        </p>

        <ul>
            <li>Building Electrical Installation</li>
            <li>Electrical Maintenance</li>
            <li>Electronic Equipment</li>
            <li>Voltage Regulators</li>
            <li>Home Cinema Installation</li>
            <li>Electrical Troubleshooting</li>
            <li>Technical Assistance</li>
        </ul>

    </div>

</section>

{/*Contact section */}
<section className="services-cta">
  <div className="services-cta-content">
    <h2>Ready to Power Your Future with Solar Energy?</h2>

    <p>
      Whether you need a residential, commercial, or hybrid solar solution,
      our experienced team is here to help you find the system that best meets
      your energy needs.
    </p>

    <Link to="/contact" className="cta-button">
     Contact Us
    </Link>
  </div>
</section>



    </>
  );
}

export default Services;