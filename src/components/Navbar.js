import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, onLogout }) {
  return (
    <div className='flex flex-col md:flex-row justify-evenly items-center'>
      <nav>
        <ul className='flex flex-col md:flex-row gap-6'>
          <li className='text-white text-lg mt-8'>
            <Link to="/">Home</Link>
          </li>
          <li className='text-white text-lg mt-8'>
            <Link to="/about">About</Link>
          </li>
          <li className='text-white text-lg mt-8'>
            <Link to="/project">Project</Link>
          </li>
          <li className='text-white text-lg mt-8'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className='flex flex-col md:flex-row gap-6 mt-8'>
        {!isLoggedIn && (
          <>
            <Link to='/login' className='text-white'>
              <button className="bg-gray-900 px-6 py-2 rounded-lg">Login</button>
            </Link>
            <Link to='/signup' className='text-white'>
              <button className="bg-gray-900 px-6 py-2 rounded-lg">Sign up</button>
            </Link>
          </>
        )}
        {isLoggedIn && (
          <button onClick={onLogout} className="bg-gray-900 px-6 py-2 rounded-lg text-white">
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
