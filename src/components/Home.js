// src/components/Home.js
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './HomePage.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleDoctorClick = () => {
    navigate('/doctorLogin');
  };

  const handlePatientClick = () => {
    navigate('/patientLogin');
  };

  return (
    <div className="home-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">HealthCard</Link>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/about" className="navbar-link">About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" className="navbar-link">Services</Link>
            </li>
            <li className="navbar-item">
              <Link to="/help" className="navbar-link">Help</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link">Contact</Link>
            </li>
            <li className="navbar-item">
              <button className="btn" onClick={handleLoginClick}>Admin</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to HealthCard Management System</h1>
          <p>Your gateway to seamless healthcare management</p>
          <div className="hero-buttons">
            <button className="btn" onClick={handleDoctorClick}>Doctor Login</button>
            <button className="btn" onClick={handlePatientClick}>Patient Login</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Manage Patient Records</h3>
            <p>Maintain accurate and up-to-date patient information.</p>
          </div>
          <div className="service-card">
            <h3>Schedule Appointments</h3>
            <p>Easy scheduling for patient visits and consultations.</p>
          </div>
          <div className="service-card">
            <h3>Access Medical History</h3>
            <p>View and update patient medical history efficiently.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"HealthCard has streamlined our administrative tasks significantly!"</p>
            <h4>- Dr. Smith</h4>
          </div>
          <div className="testimonial">
            <p>"A game changer for managing patient data securely."</p>
            <h4>- Nurse Johnson</h4>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq">
            <h4>How do I register as a new patient?</h4>
            <p>Click on the 'Patient Login' button and follow the instructions to register.</p>
          </div>
          <div className="faq">
            <h4>Can I access my medical records online?</h4>
            <p>Yes, you can access and manage your medical records through our system.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-content">
          <p>© 2024 HealthCard Management System</p>
          <ul className="social-media">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
