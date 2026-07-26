import { useState } from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({
  full_name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("✅ " + data.message);

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      alert("❌ " + data.message);
    }
  } catch (error) {
    console.error(error);
    alert("❌ Unable to connect to the server.");
  }
};

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Whether you have questions about our
            services or need a customized solar solution, our team is ready to
            help.
          </p>
        </div>
      </section>
     
    <div className="contact-page"> 
        {/* Contact Section */}
        <section className="contact-section">

            {/* Left Card */}
            <div className="contact-info">

            <h2>Get In Touch</h2>

            <div className="info-item">
                <FaMapMarkerAlt className="icon" />
                <div>
                <h4>Address</h4>
                <p>Kribi, Cameroon</p>
                </div>
            </div>

            <div className="info-item">
                <FaPhoneAlt className="icon" />
                <div>
                <h4>Phone</h4>
                <p>+237 670 245 805</p>
                </div>
            </div>

            <div className="info-item">
                <FaEnvelope className="icon" />
                <div>
                <h4>Email</h4>
                <p>dovsolarenergy@gmail.com</p>
                </div>
            </div>

            <div className="info-item">
                <FaClock className="icon" />
                <div>
                <h4>Working Hours</h4>
                <p>Monday - Friday</p>
                <p>8:00 AM - 5:00 PM</p>
                </div>
            </div>

            </div>

            {/* Right Card */}
            <div className="contact-form">

            <h2>Send Us a Message</h2>

            <form onSubmit={handleSubmit}>

                <input
                  type="text"
                  name="full_name"
                  placeholder="Your Name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                type="text"
                 name="subject"
                 placeholder="Subject"
                 value={formData.subject}
                 onChange={handleChange}
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <button type="submit">
                Send Message
                </button>

            </form>

            </div>

        </section>
    </div>   

    </>
  );
}

export default Contact;