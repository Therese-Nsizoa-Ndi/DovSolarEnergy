import './AboutUs.css'
import abt from '../../assets/imge.jpg'

function AboutUs() {
    return (
        <div className="aboutus">

        <div className="about-element">
            <img src={abt} alt="Solar Panel" className="S-Img"></img>

            <div className="about-text">    
                <p>Hello, we are </p>
                <p className="comp-name">Dov Solar Energy</p>
            </div> 
            
        </div> 

                {/* Who We Are */}

      <section className="about-section">

        <h2>Who We Are</h2>

        <p>
          Dov Solar Energy is an innovative company based in Kribi,
          South Cameroon, specializing in the design, installation,
          and maintenance of photovoltaic and solar thermal systems.

          We believe Africa possesses enormous solar potential and
          vast untapped spaces capable of transforming communities
          through clean and sustainable energy.

          Beyond renewable energy, we also provide electronics,
          electrical installations and IT maintenance services,
          delivering complete technological solutions for homes,
          businesses and institutions.

          <br />
          <br />

          <strong>Our Motto:</strong>
          <br />
          "Free Energy at Your Disposal."
        </p>

      </section>
      {/* Mission Vision Values */}

      <section className="mission-section">

        <div className="mission-card">
          <h2>Our Mission</h2>

          <p>
            To provide reliable, innovative and sustainable energy
            solutions that improve lives while promoting renewable
            energy across Africa.
          </p>

        </div>

        <div className="mission-card">

          <h2>Our Vision</h2>

          <p>
            To become one of Africa's leading providers of renewable
            energy and technology solutions by empowering communities
            through innovation, sustainability and excellence.
          </p>

        </div>

        <div className="mission-card">

          <h2>Our Values</h2>

          <ul>
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Professionalism</li>
            <li>Quality</li>
            <li>Customer Satisfaction</li>
            <li>Sustainability</li>
          </ul>

        </div>

      </section>
      {/* Why Choose Us */}

      <section className="about-section">

        <h2>Why Choose Dov Solar Energy?</h2>

        <div className="choose-grid">

          <div className="choose-card">
            ☀ Renewable Energy Specialists
          </div>

          <div className="choose-card">
            🌍 Committed to Africa's Sustainable Development
          </div>

          <div className="choose-card">
            ⚡ Reliable Installation & Maintenance
          </div>

          <div className="choose-card">
            💡 Innovative Energy Solutions
          </div>

          <div className="choose-card">
            🤝 Experienced & Professional Team
          </div>

          <div className="choose-card">
            🌱 Environmentally Friendly Technologies
          </div>

        </div>

      </section>

      {/* Expertise */}

      <section className="about-section">

        <h2>Our Expertise</h2>

        <div className="expertise-grid">

          <div className="expertise-card">

            <h3>☀ Solar Energy</h3>

            <ul>
              <li>Photovoltaic Systems</li>
              <li>Solar Thermal Systems</li>
              <li>Public Lighting</li>
              <li>Solar Equipment Supply</li>
              <li>Maintenance Services</li>
            </ul>

          </div>

          <div className="expertise-card">

            <h3>💻 IT Solutions</h3>

            <ul>
              <li>Computer Networks</li>
              <li>Server Installation</li>
              <li>IT Maintenance</li>
              <li>Video Surveillance</li>
              <li>Technical Support</li>
            </ul>

          </div>

          <div className="expertise-card">

            <h3>⚡ Electronics & Electrical</h3>

            <ul>
              <li>Building Electrical Systems</li>
              <li>Electronic Equipment</li>
              <li>Home Cinema</li>
              <li>Voltage Regulators</li>
              <li>Installation & Maintenance</li>
            </ul>

          </div>

        </div>

      </section>

      {/* Company Journey */}

<section className="about-section">

    <h2>Our Journey</h2>

    <p>
        Founded in <strong>2020</strong>, Dov Solar Energy has steadily
        established itself as a trusted company in the photovoltaic
        solar industry.

        From small stand-alone installations to hybrid systems,
        backup solutions and mini power plants, every project has
        represented a new challenge that has strengthened our
        experience and expertise.

        Today, we continue to grow with one clear ambition:
        to contribute to Africa's energy transition by making
        renewable energy accessible to everyone.
    </p>

</section>

{/* Company Values */}

<section className="about-section">

    <h2>Our Core Values</h2>

    <div className="choose-grid">

        <div className="choose-card">
            ⭐ Professionalism
        </div>

        <div className="choose-card">
            🤝 Credibility
        </div>

        <div className="choose-card">
            ✔ Responsibility
        </div>

        <div className="choose-card">
            👥 Teamwork
        </div>

        <div className="choose-card">
            🎯 Discipline
        </div>

        <div className="choose-card">
            💡 Innovation
        </div>

    </div>

</section>

{/* Our Commitment */}

<section className="about-section">

    <h2>Our Commitment</h2>

    <p>

        At Dov Solar Energy, every project is carefully planned
        to ensure quality workmanship and on-time delivery.

        Whenever unforeseen circumstances arise, we communicate
        transparently with our customers and provide timely updates.

        Our commitment continues long after installation through
        professional technical assistance, maintenance services
        and reliable after-sales support.

    </p>

</section> 

{/* Warranty */}

<section className="about-section">

    <h2>Warranty & Technical Support</h2>

    <p>

        Working closely with our international suppliers,
        Dov Solar Energy provides warranties on the equipment
        supplied to our customers.

        Our experienced technical team ensures preventive
        and corrective maintenance so that every installation
        continues operating safely, efficiently and reliably.

    </p>

</section>

{/* Partners */}

<section className="about-section">

    <h2>Our Trusted Partners</h2>

    <div className="partners-grid">

        <div className="partner-card">Felicity Solar 🇨🇳</div>

        <div className="partner-card">Victron Energy 🇳🇱</div>

        <div className="partner-card">Gabi & Techfine 🇨🇳</div>

        <div className="partner-card">Anern Industry 🇨🇳</div>

        <div className="partner-card">Sonken & Beewin 🇨🇳</div>

        <div className="partner-card">Growatt 🇨🇳</div>

        <div className="partner-card">Cworth Energy 🇨🇳</div>

    </div>

</section>

{/* Clients */}

<section className="about-section">

    <h2>Who We Serve</h2>

    <div className="choose-grid">

        <div className="choose-card">
            🏛 Government Institutions
        </div>

        <div className="choose-card">
            🏙 Municipalities
        </div>

        <div className="choose-card">
            🏢 Companies
        </div>

        <div className="choose-card">
            🏠 Residential Customers
        </div>

        <div className="choose-card">
            🌍 Rural Communities
        </div>

        <div className="choose-card">
            ⚡ Public Infrastructure
        </div>

    </div>

</section>


    </div>
        
    );
}

export default AboutUs;