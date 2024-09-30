import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import profileimg from "../assets/profile-pic__2_-removebg-preview.png";
import './About.css'; // Define the animations in this CSS file
import { Link } from 'react-router-dom';

function About() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl space-x-6">
          {/* Image div */}
          <CSSTransition in={inProp} timeout={1000} classNames="image">
            <div className="flex justify-center w-full md:w-1/2 animate-image">
              <img
                src={profileimg}
                alt="About me"
                className="w-72 h-72 rounded-full object-cover" // Increased size
              />
            </div>
          </CSSTransition>
          {/* Content and button div */}
          <CSSTransition in={inProp} timeout={1000} classNames="content">
            <div className="flex flex-col items-center md:items-start text-center md:text-left text-white w-full md:w-1/2">
              <div className="text-4xl font-bold mb-2">About <span className="text-blue-500">Me</span></div>
              <div className="text-xl mb-4 font-semibold">Web Developer</div>
              <div className="mb-4">
                <p className="text-lg">With a strong foundation in web development, I've honed my skills in creating responsive, user-friendly websites. I'm not just about coding; I believe in crafting digital experiences that engage, inform, and empower.</p>
              </div>
              <Link to='/contact'>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full transition-transform transform hover:scale-105">
                  Contact Me
                </button>
              </Link>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}

export default About;
