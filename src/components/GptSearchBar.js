import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addSearchedMovies } from '../utils/moviesSlice'

const GptSearchBar = () => {

    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);

    const handleGptSearchClick = async () => {
        const result = await fetch('https://api.themoviedb.org/3/search/movie?query=+'+searchText.current.value+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await result.json();
        dispatch(addSearchedMovies(json.results));
    }

    return (
        <div className='pt-[10%] flex justify-center'>
            <form 
                onSubmit={(e) => e.preventDefault()} 
                className='w-full md:w-1/2 bg-black rounded-lg grid grid-cols-12'>
                
                <input 
                    ref={searchText} 
                    className='p-3 m-2 rounded-lg col-span-12 md:col-span-9' 
                    type='text' 
                    placeholder={lang[langKey].gtpSearchPlaceholder} />

                <button 
                    onClick={handleGptSearchClick} 
                    className='col-span-12 md:col-span-3 m-2 py-2 rounded-lg px-4 bg-red-700 text-white'>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar;
