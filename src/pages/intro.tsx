import React from 'react';
import '../App.css';

const Intro: React.FC = () => {
  return (
    <div className='centering'>
        <div className="container">
             <div className='didyaknow' id='uk'>
                <h2>
                    Did ya know?
                </h2>
                <p>
                    I did not only dedicated myself to the front-end world but also
                    went to learn all type of other stuff. A little game development here,
                    Discord <i className="fa-brands fa-discord"></i> bots there. Of course 
                    I'll be sharing some details in my <a href='/projects'>"Projects"</a> page/section.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Intro;
