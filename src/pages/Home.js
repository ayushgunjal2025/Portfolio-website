import React, { useEffect, useState } from 'react';
import Image from "../assets/profile-pic__6_-removebg-preview.png";
import gif from "../assets/gif.png";
import farmer from "../assets/farmer.png";
import api from "../assets/api.jpg";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { LiaHackerrank } from "react-icons/lia";
import "./styles.css";

function Home({ isLoggedIn ,setIsLoggedIn}) {
  const [hasRotated, setHasRotated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasRotated(true);
    }, 1000);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div className='text-white flex flex-col items-center mt-28 mx-auto max-w-4xl p-4 slide-up overflow-x-hidden'>
      {/* Main Content Section */}
      <div className='flex flex-col md:flex-row w-full'>
        <div className='w-full md:w-1/2 pr-4 flex flex-col gap-2'>
          <h1 className='text-2xl font-bold'>Hello, It's Me</h1>
          <h1 className='text-6xl font-bold'>Ayush Gunjal</h1>
          <div className='mt-4 flex flex-row gap-2'>
            <h1 className='text-3xl font-bold'>And I'm a</h1>
            <h1 className='text-3xl font-bold text-sky-600'>Web Developer</h1>
          </div>
          <p className='mt-4 text-small'>
            As a passionate and driven IT student currently in my 4th year, I'm dedicated to making a meaningful impact in the world of technology.
          </p>
          <div className='mt-4 flex flex-row gap-3'>
            <a href="https://www.linkedin.com/in/ayush-gunjal-65155b283" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='text-sky-600 text-4xl' />
            </a>
            <a href="https://github.com/ayushgunjal2025?tab=repositories" target="_blank" rel="noopener noreferrer">
              <FaGithub className='text-sky-600 text-4xl' />
            </a>
            <a href="https://www.hackerrank.com/ayushgunjal20211" target="_blank" rel="noopener noreferrer">
              <LiaHackerrank className='text-sky-600 text-4xl' />
            </a>
            <a href="https://www.youtube.com/@AyushGunjal-t2t" target="_blank" rel="noopener noreferrer">
              <FaYoutube className='text-sky-600 text-4xl' />
            </a>
          </div>
          <div className='mt-4'>
            <button
              onClick={handleDownload}
              className='bg-sky-600 hover:bg-blue-700 text-white w-48 h-16 rounded-full transition-all duration-300 ease-in-out'
            >
              Download CV
            </button>
          </div>
        </div>
        <div className='w-full md:w-1/2 pl-4 flex items-center justify-center'>
          <img
            src={Image}
            alt='profile'
            className={`rounded-full w-full max-w-xs md:max-w-sm lg:max-w-md ${hasRotated ? 'bounce' : 'rotate-once'}`}
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className='mt-16 w-full flex flex-col gap-8'>
        {/* First Card */}
        <div className='card flex flex-col md:flex-row p-4 rounded-lg h-64'>
          <div className='w-full md:w-1/2 flex justify-center items-center'>
            <img src={farmer} alt='Final year farmer website' className='rounded-lg w-full h-full object-cover' />
          </div>
          <div className='w-full md:w-1/2 flex flex-col justify-center pl-4'>
            <h2 className='text-2xl font-bold'>Final year Farmer website</h2>
            <p className='mt-2'>
              This website is built to help farmers manage their agricultural activities, track crop growth, monitor soil health, and improve productivity.
            </p>
            <a href="https://agritech-partner.netlify.app/" target="_blank" rel="noopener noreferrer" className='text-sky-600 mt-2'>
              Visit Website
            </a>
          </div>
        </div>

        {/* Second Card */}
        <div className='card flex flex-col md:flex-row-reverse p-4 rounded-lg h-64'>
          <div className='w-full md:w-1/2 flex justify-center items-center'>
            <img src={api} alt='Second Project' className='rounded-lg w-full h-full object-cover' />
          </div>
          <div className='w-full md:w-1/2 flex flex-col justify-center pl-4'>
            <h2 className='text-2xl font-bold'>REST API Creation and Hosting</h2>
            <p className='mt-2'>
            This API was built to handle various operations for a system, including creating, reading, updating, and deleting tasks.
            </p>
            <a href="https://stident-api.onrender.com/api/students" target="_blank" rel="noopener noreferrer" className='text-sky-600 mt-2'>
              Check API
            </a>
          </div>
        </div>

        {/* Third Card */}
        <div className='card flex flex-col md:flex-row p-4 rounded-lg h-64'>
          <div className='w-full md:w-1/2 flex justify-center items-center'>
            <img src={gif} alt='Third Project' className='rounded-lg w-full h-full object-cover' />
          </div>
          <div className='w-full md:w-1/2 flex flex-col justify-center pl-4'>
            <h2 className='text-2xl font-bold'>Third Project</h2>
            <p className='mt-2'>
            This project is an interactive web application that allows users to input a keyword and generate a random GIF based on that keyword.
            </p>
            <a href="https://ayush-gunjal-random-gif-generator.netlify.app/" target="_blank" rel="noopener noreferrer" className='text-sky-600 mt-2'>
              Visit Website
            </a>
          </div>
        </div>

        {/* Fourth Card (New card added) */}
        <div className='card flex flex-col md:flex-row-reverse p-4 rounded-lg h-64'>
          <div className='w-full md:w-1/2 flex justify-center items-center'>
            <img src={api} alt='Fourth Project' className='rounded-lg w-full h-full object-cover' />
          </div>
          <div className='w-full md:w-1/2 flex flex-col justify-center pl-4'>
            <h2 className='text-2xl font-bold'>REST API Creation and Hosting</h2>
            <p className='mt-2'>
            This API was built to handle various operations for a system, including creating, reading, updating, and deleting tasks.
            </p>
            <a href="https://user-api-byvl.onrender.com/users" target="_blank" rel="noopener noreferrer" className='text-sky-600 mt-2'>
            Check API
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
