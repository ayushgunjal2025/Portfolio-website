import React from 'react';
import Img1 from "../assets/rocket 1.png";
import Img2 from "../assets/trend 1.png";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./styles.css";

function Project(props) {
  let data = props.data;
  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-4 p-4'>
      {/* card1 */}
      <div className='w-full max-w-[1000px] h-auto md:h-[260px] bg-black border-2 rounded-lg border-white flex flex-col md:flex-row gap-4 transform transition-transform duration-300 hover:scale-105'>
        <div className='flex flex-col gap-2 p-4'>
          <div>
            <h1 className='text-white text-3xl'>{data[0].title}</h1>
            <a href={data[0].link} className='text-blue-600'>{data[0].link}</a>
          </div>
          <div>
            <p className='text-white mt-4'>{data[0].desc1}</p>
            <p className='text-white mt-4'>{data[0].desc2}</p>
            <div className='flex items-center gap-1 mt-4'>
              <FaExternalLinkSquareAlt className='text-white' />
              <Link to="/projectvideos">
                <p className='text-white'>Watch Video</p>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex justify-center md:justify-start p-4'>
          <img src={Img1} className='w-32 h-32 md:w-36 md:h-36' alt="Rocket" />
        </div>
      </div>
      {/* card2 */}
      <div className='w-full max-w-[1000px] h-auto md:h-[260px] bg-black border-2 rounded-lg border-white flex flex-col md:flex-row gap-4 transform transition-transform duration-300 hover:scale-105'>
        <div className='flex flex-col gap-2 p-4'>
          <div>
            <h1 className='text-white text-3xl'>{data[1].title}</h1>
            <a href={data[1].link} className='text-blue-600'>{data[1].link}</a>
          </div>
          <div>
            <p className='text-white mt-4'>{data[1].desc1}</p>
            <p className='text-white mt-4'>{data[1].desc2}</p>
            <div className='flex items-center gap-1 mt-4'>
              <FaExternalLinkSquareAlt className='text-white' />
              <Link to="/projectvideos">
                <p className='text-white'>Watch Video</p>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex justify-center md:justify-start p-4'>
          <img src={Img2} className='w-36 h-36 md:w-40 md:h-40' alt="Trend" />
        </div>
      </div>
    </div>
  );
}

export default Project;
