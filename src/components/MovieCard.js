import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import useMoviePlay from '../hooks/useMoviePlay'; // Custom hook for fetching the video data
import { toast } from 'react-toastify';

const MovieCard = ({ id, posterPath }) => {
  const navigate = useNavigate();
  const fetchMovieVideos = useMoviePlay(); // Get the fetch function from the hook

  const handleMoviePlay = async () => {
    toast.info("Playing your video!", {
      theme: "dark",
      autoClose: 3000,
    });
    await fetchMovieVideos(id); // Fetch the movie video data
    navigate("/moviePlay"); // Navigate after data is fetched
  };

  return (
    <div className="w-32 overflow-hidden md:w-48 pr-2 md:pr-4 cursor-pointer">
      <img
        onClick={handleMoviePlay} // Call handleMoviePlay on click
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
        className="w-full min-h-30 h-auto object-cover transition-transform duration-200 ease-in-out hover:scale-110"
      />
    </div>
  );
};

export default MovieCard;
