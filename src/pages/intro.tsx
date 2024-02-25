import React from 'react';
import '../css/intro.css';

const Intro: React.FC = () => {
  return (
    <div className='centering'>
      <div className="intro-container">
        <div className='sayMyName'>
          <h2>Say my name</h2>
          <p>Well, as you may have gathered, I go by the name Antoine Salameh, 
            or BiG A for short, and I've managed to survive 23 trips around the 
            sun.
            <br></br>
            I've navigated my way through the labyrinth of WordPress and bots 
            armed with nothing but my wits, a heap of research, a library of 
            documentation, and enough tutorial videos to make even YouTube proud. 
            <br></br>
            From there, I embarked on a series of personal projects to further 
            hone my web development prowess. You'll find some of my handiwork 
            <a href='/projects'> there</a>.
            <br></br>
            Currently, I'm donning the guise of a stock manager at B.Steel, 
            but let's be real—that's not my endgame. I've got my sights set 
            on conquering the web development arena, and I'll seize every 
            opportunity that comes my way.
          </p>
          <p>
            ""You miss 100% of the shots you don't take." - Wayne Gretzky" 
            - Michael Scott
          </p>
        </div>
        <div className='didyaknow'>
          <h2>
            Did ya know?
          </h2>
          <p>
            I did not only dedicated myself to the front-end world but also
            went to learn all type of other stuff. A little game development here,
            Discord <i className="fa-brands fa-discord"></i> bots there. Of course 
            I'll be sharing some details in my "Projects" page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
