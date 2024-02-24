import React from 'react';
import '../css/projects.css';
import DateMikeImage from '../assets/disc-bots/DateMike.jpg'; // Import your image files
import JakeBlackImage from '../assets/disc-bots/JakeBlack.jpg';
import StonksImage from '../assets/disc-bots/Stonks.jpg';
import Website1Image from '../assets/website-designs/getns-dorm.jpg';
import Website2Image from '../assets/website-designs/goatee.jpg';
import Website3Image from '../assets/website-designs/PlanetBlue sc.jpg';

const Projects: React.FC = () => {
  return (
    <div>
      <p>Here I'll be showcasing some of my personal projects.</p>
      <div className="grid-container">
        <div className="card">
          <h2>Discord Bots <i className="fa-brands fa-discord"></i></h2>
          <ul>
            <li>
              <div>
                <img src={DateMikeImage} alt='Date Mike' />
                Date Mike a discord.js v14 bot based on the iconic Michael Scott from "The Office".
              </div>
            </li>
            <li>
              <div>
                <img src={JakeBlackImage} alt='Jake Black' />
                Jake Black a discord.py bot to play 21.
              </div>
            </li>
            <li>
              <div>
                <img src={StonksImage} alt='Stonks' />
                Stonk Bot a discord.py bot that gives you real-time information about the stock market + crypto currencies.
              </div>
            </li>
          </ul>
        </div>
        <div className="card">
          <h2>Website Designs</h2>
          <div className="website-grid">
            <div className="website-item">
              <img src={Website1Image} alt="Website 1" />
              <p>Gentlemen's Dorm</p>
            </div>
            <div className="website-item">
              <img src={Website2Image} alt="Website 2" />
              <p>GOATee</p>
            </div>
            <div className="website-item">
              <img src={Website3Image} alt="Website 3" />
              <p>PlanetBlue Airways</p>
            </div>
          </div>
        </div>
        <div className="card">Category 3</div>
        <div className="card">Category 4</div>
      </div>
    </div>
  );
};

export default Projects;
