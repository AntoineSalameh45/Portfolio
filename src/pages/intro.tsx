import React from 'react';
import TypingAnimation from '../components/typingAnimation'; // Import the TypingAnimation component
import '../App.css';

const Intro: React.FC = () => {
  return (
    <div className="container">
        <div className="content">
            <TypingAnimation />
            <p>
            Hello! My name is Antoine and I'm a web developer. I specialize in building modern and responsive websites and web applications using cutting-edge technologies.
            </p>
            <p>
            This portfolio showcases some of my projects and highlights my skills and experiences in web development. Feel free to explore and get in touch if you have any questions or would like to collaborate on a project!
            </p>
            <p style={{ textAlign: 'center' }}>
            Let's get to know me
            <br></br>
            <a href='#uk'><i className="fa-solid fa-arrow-down"></i></a>
            </p>
        </div>

        {/* <div className='didyaknow' id='uk'>
            <h2>
                Did ya know?
            </h2>
            <p>
                I did not only dedicated myself to the front-end world but also
                went to learn all type of other stuff. A little game development here,
                Discord <i className="fa-brands fa-discord"></i> bots there. Of course 
                I'll be sharing some details in my <a href='/projects'>"Projects"</a> page/section.
            </p>
        </div> */}
    </div>
  );
};

export default Intro;
