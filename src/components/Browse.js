import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  // Fetching movie data and pushing to redux store
  useNowPlayingMovies();      // Custom Hooks
  usePopularMovies();
  useTopRatedMovies()
  useUpcomingMovies();

  return (
    <div className='bg-black md:bg-transparent'>
      <Header/>
      {
        showGptSearch ? (<GptSearch/>) : 
        (<> 
        <MainContainer/> 
        <SecondaryContainer/> 
        </>)
      }
      
    </div>
  )
}

export default Browse;