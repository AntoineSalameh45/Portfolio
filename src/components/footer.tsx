import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a href="mailto:antoine.salameh.45@gmail.com" className="footer__link">Contact Me via e-mail</a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://twitter.com/BiG_A_Codes" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://www.linkedin.com/in/antoine-salameh-7705471ab/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://instagram.com/_big___a_?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://www.youtube.com/channel/UCv3DKOJht4s1HeCWOjI4YfQ" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
