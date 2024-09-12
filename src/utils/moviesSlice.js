import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        searchedMovies: null,
        moviePlay: null,
    },
    reducers: {
        addNowPlayingMovies: (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action) =>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state,action) =>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state,action) =>{
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo: (state,action) =>{
            state.trailerVideo = action.payload;
        },
        addSearchedMovies: (state,action) =>{
            state.searchedMovies = action.payload;
        },
        addMoviePlay: (state,action) =>{
            state.moviePlay = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addTrailerVideo, addUpcomingMovies, addSearchedMovies, addMoviePlay} = moviesSlice.actions;

export default moviesSlice.reducer;