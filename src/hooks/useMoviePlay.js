import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMoviePlay } from "../utils/moviesSlice";

const useMoviePlay = () => {
    const dispatch = useDispatch();
    // Fetch trailer video and update the store with trailer video data

    const fetchMovieVideos = async (movieId) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
            const json = await response.json();

            if (Array.isArray(json.results) && json.results.length > 0) {
                const filterData = json.results.filter((video) => video.type === "Trailer");
                const video = filterData.length > 0 ? filterData[0] : json.results[0];
                dispatch(addMoviePlay(video));
            } else {
                console.error("No video results found for this movie.");
            }
        } catch (error) {
            console.error("Failed to fetch movie videos:", error);
        }
    };

    return fetchMovieVideos; // Return the function that fetches the videos
};

export default useMoviePlay;
