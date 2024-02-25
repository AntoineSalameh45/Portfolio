import React from 'react';
import '../css/contact.css';

const Contact: React.FC = () => {
  
  return (
    <div className='whole'>
            <div className="about-section">
                <img src="src\assets\big-a-logo.png" alt="Your Logo" />
                <p>
                Connect with me on social media or reach out via email or phone. Let's get in touch!
                You can find me pretty much everywhere either with my original name Antoine Salameh or
                as BiG A or even BiG A Codes, basically wherever you see this logo of mine.
                </p>
                <div>
                    <a href="https://www.linkedin.com/in/antoine-salameh-7705471ab/" target="_blank" rel="noopener noreferrer" className='fa'>
                    <i className="fab fa-linkedin"></i>
                    </a>

                    <a href="mailto: antoine.salameh.45@gmail.com" target="_blank" rel="noopener noreferrer" className='fa'>
                    <i className="fa-solid fa-square-envelope"></i>
                    </a>

                    <a href="tel:9613913210" target="_blank" rel="noopener noreferrer" className='fa'>
                    <i className="fa-solid fa-square-phone"></i>
                    </a>
                    
                    <a href="https://wa.me/9613913210" target="_blank" rel="noopener noreferrer" className='fa'>
                    <i className="fab fa-square-whatsapp"></i>
                    </a>

                    <a href="https://github.com/AntoineSalameh45" target="_blank" rel="noopener noreferrer" className='fa'>
                    <i className="fab fa-square-github"></i>
                    </a>
                </div>
                
            </div>
    </div>
  );
};

export default Contact;