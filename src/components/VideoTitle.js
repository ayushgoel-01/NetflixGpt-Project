import React from 'react'
import info_icon from '../images/info_icon.png'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-full aspect-video pt-[50%] md:pt-[20%] px-4 md:px-24 absolute text-white md:bg-transparent bg-gradient-to-r from-black to-transparent'>

      <h1 className='text-3xl md:text-5xl font-bold'>{title}</h1>
      <p className='text-xs md:text-sm py-4 md:py-6 w-full md:w-1/3'>{overview}</p>

      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2'>
        <button className='bg-white text-lg md:text-xl text-black p-2 md:px-12 rounded-lg hover:bg-opacity-80'>
          ▶️ Play
        </button>

        <button className='bg-gray-500 text-lg md:text-xl text-white p-2 md:px-7 bg-opacity-50 rounded-lg'>
          <img className='w-5 md:w-6 pb-1 pr-1 inline' src={info_icon} alt="Info" /> More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle;