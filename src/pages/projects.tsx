import '../css/projects.css';
import DateMikeImage from '../assets/disc-bots/DateMike.jpg'; 
import JakeBlackImage from '../assets/disc-bots/JakeBlack.jpg';
import StonksImage from '../assets/disc-bots/Stonks.jpg';
import Website1Image from '../assets/website-designs/getns-dorm.jpg';
import Website2Image from '../assets/website-designs/goatee.jpg';
import Website3Image from '../assets/website-designs/PlanetBlue sc.jpg';
import RobbieGif from '../assets/robbie/Robot-Robbie.gif';
import RobbieVideo from '../assets/robbie/test1.mp4';

const Projects: React.FC = () => {
 return (
    <div>
      <div className="grid-container">
        <div className="card">
          <h2>Discord Bots <i className="fa-brands fa-discord"></i></h2>
          <ul>
            <li>
              <div>
                <img src={DateMikeImage} alt='Date Mike' className='pfp'/>
                Date Mike a discord.js v14 bot based on the iconic Michael Scott from "The Office".
              </div>
            </li>
            <li>
              <div>
                <img src={JakeBlackImage} alt='Jake Black' className='pfp'/>
                Jake Black a discord.py bot to play 21.
              </div>
            </li>
            <li>
              <div>
                <img src={StonksImage} alt='Stonks' className='pfp'/>
                Stonk Bot a discord.py bot that gives you real-time information about the stock market + crypto currencies.
              </div>
            </li>
            <li>
              <div>
                <img src={StonksImage} alt='Motivation' className='pfp'/>
                Stonk Bot a discord.py bot that gives you real-time information about the stock market + crypto currencies.
              </div>
            </li>
          </ul>
        </div>
        <div className="card">
          <h2>
            Website Designs <i className="fa-solid fa-code"></i>
          </h2>
          <div className="website-grid">
            <div className="website-item">
              <img src={Website1Image} alt="Website 1" />
              <p>Gentlemen's Dorm</p>
            </div>
            <div className="website-item" >
              <img src={Website2Image} alt="Website 2" />
              <p>GOATee</p>
            </div>
            <div className="website-item" >
              <img src={Website3Image} alt="Website 3" />
              <p>PlanetBlue Airways</p>
            </div>
          </div>
        </div>
        <div className="card">
          <h2>
            Game Dev? Blender3D? <i className="fa-brands fa-unity"></i>
          </h2>
          <p>
            On my journey learning coding I tried many field one of which 
            was game development. Back in 2020-2021 when we had all the time
            sitting home quarantined I decided to find my future career path
            which leaded to trying game dev. It was a very simplistic idea, an 
            endless runner game like Subway Surfers but the theme is different.
            It was about a Robot called Robbie. <br></br>
            Project: Run Robbie Run!
          </p>
          <div className="media-container">
            <img src={RobbieGif} alt="Robbie" id='robbie'/>
            <div className="video-container">
              <video controls>
                <source src={RobbieVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p>
            I modeled Robbie using Blender3D and the gameplay testing you see 
            was my first try running it with some obstacles and coins on Unity if 
            I'm recalling.
          </p>
        </div>
        <div className="card">
          <h2>
            Video Editing and Streaming? &nbsp;
            <i className="fa-brands fa-youtube"></i> &nbsp;
            <i className="fa-brands fa-twitch"></i>
          </h2>
          <p>
            While freelancing on a WordPress canadian website they also needed some 
            help managing their socials mainly Discord, Instagram, Tiktok, Twitch, and 
            Youtube. So I earned some video editing and moderating skills.<br></br> 
            &#x28;btw that's when I made the StonkBot, for this precise Discord server&#x29;
          </p>
          <div className='socials-qr'>
            <img src='src\assets\qrcode_www.twitch.tv.png' id='tt-qr'></img>
            <i className="fa-solid fa-arrow-left"></i>
            <i className="fa-brands fa-twitch"></i> &nbsp;&nbsp;
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-solid fa-arrow-right"></i>
            <img src='src\assets\qrcode_www.youtube.com.png' id='yt-qr'></img>
          </div>
        </div>
    </div>
  </div>
  );
};

export default Projects;