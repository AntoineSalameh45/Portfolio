import React from 'react';
import '../css/contact.css';
import '../App.css';

const Contact: React.FC = () => {
  return (
    <div className='whole'>
      <div className="contact-container">
        <div className="contact-cards">
          <div className="contact-card">
            <a href="https://www.linkedin.com/in/antoine-salameh-7705471ab/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="contact-card">
            <a href="mailto: antoine.salameh.45@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-envelope"></i>
              <span>e-Mail</span>
            </a>
          </div>
          <div className="contact-card">
            <a href="tel:9613913210" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-phone"></i>
              <span>Call</span>
            </a>
          </div>
          <div className="contact-card">
            <a href="https://wa.me/9613913210" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp"></i>
              <span>WA</span>
            </a>
          </div>
        </div>
      </div>
      <div className="about-section">
        <img src="src\assets\big-a-logo.png" alt="Your Logo" />
        <p>
          Connect with me on social media or reach out via email or phone. Let's get in touch!
          You can find me pretty much everywhere either with my original name Antoine Salameh or
          as BiG A or even BiG A Codes, basically wherever you see this logo of mine.
        </p>
      </div>
    </div>
  );
};

export default Contact;
