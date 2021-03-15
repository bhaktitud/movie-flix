
import { SET_FETCH_LOADING, SET_MOVIE_LIST, SET_MOVIE_TRAILER, SET_SIMILAR_MOVIE, SET_UPCOMING_MOVIE } from '../types';

const initialState = {
    movies: [],
    similarMovies: [],
    upcomingMovies: [],
    loadFetching: false,
    movieTrailer: {}
}

export const reducers = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case SET_MOVIE_TRAILER:
            return {
                ...state,
                movieTrailer: payload
            }
        case SET_FETCH_LOADING:
            return {
                ...state,
                loadFetching: payload
            }
        case SET_MOVIE_LIST:
            return {
                ...state,
                movies: [...state.movies, ...payload]
            }
        case SET_SIMILAR_MOVIE:
            return {
                ...state,
                similarMovies: payload
            }
        case SET_UPCOMING_MOVIE:
            return {
                ...state,
                upcomingMovies: payload
            }
        default:
            return state;
    }
}