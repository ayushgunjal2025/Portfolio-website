import React from 'react'
import ReactPlayer from 'react-player'
import "./styles.css"

function Projectvideos() {
    return (
        <div className='flex flex-row justify-evenly gap-x-4 mt-20'>
      <div className='slide-up'>
        <div className='border-4 border-blue-800 rounded-xl'>
          <ReactPlayer
            url='https://youtu.be/hFGL1ajR3ZA'
            playing
          />
        </div>
        <div className='flex justify-center mt-6'>
          <div className='w-1/2 border-4 border-blue-800 bg-gray-700 rounded-xl'>
          </div>
        </div>
        <div className='flex justify-center mt-4'>
          <div><h1 className='text-white mt-4 text-3xl font-sans'>College Finder Website</h1></div>
        </div>
        <div className='flex justify-center mt-4'>
          <p className='text-white mt-4 text-sm font-sans'>~Faced by students when embarking on their journey to find the perfect educational institution.</p>
        </div>
      </div>

      <div className='slide-up'>
        <div className='border-4 border-blue-800 rounded-xl'>
          <ReactPlayer
            url='https://youtu.be/J-chyJo0hAk'
            playing
          />
        </div>
        <div className='flex justify-center mt-6'>
          <div className='w-1/2 border-4 border-blue-800 bg-gray-700 rounded-xl'>
          </div>
        </div>
        <div className='flex justify-center mt-4'>
          <div><h1 className='text-white mt-4 text-3xl font-sans'>Civic Connect Website</h1></div>
        </div>
        <div className='flex justify-center mt-4'>
          <p className='text-white mt-4 text-sm font-sans'>~Web-based platform for civic engagement and governance</p>
        </div>
      </div>
    </div>




    )
}

export default Projectvideos