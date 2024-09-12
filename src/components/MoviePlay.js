import React from 'react'
import { useSelector } from 'react-redux'
import useMoviePlay from '../hooks/useMoviePlay';
import { useNavigate } from 'react-router-dom';

const MoviePlay = ({movieId}) => {

    const navigate = useNavigate();
    const video = useSelector(store => store.movies.moviePlay);
    useMoviePlay(movieId);

    const handleBackButton = () =>{
        navigate('/browse');
    }

  return (
    <div className='w-screen'>
        <button onClick={handleBackButton} className='absolute text-white bg-black mt-4 p-2 bg-opacity-70'>
            Go Back
        </button>
        <iframe 
            className="w-full h-auto aspect-video max-w-full" 
            src={`https://www.youtube.com/embed/${video?.key}?autoplay=1&controls=1&loop=1&playlist=${video?.key}&modestbranding=1&rel=0`} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin">
        </iframe>
    </div>
  )
}

export default MoviePlay