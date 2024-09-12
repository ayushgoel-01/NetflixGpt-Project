import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div className='absolute inset-0 -z-10'>
        <img 
          src={BG_URL} 
          alt="Background" 
          className="w-full fixed h-full object-cover" 
        />
      </div>

      <div className='pt-24 px-4 sm:pt-32 md:pt-40 lg:pt-16 md:px-8 lg:px-16'>
        <GptSearchBar />
        <div className='mt-8'>
          <GptMovieSuggestions />
        </div>
      </div>
    </>
  )
}

export default GptSearch;
