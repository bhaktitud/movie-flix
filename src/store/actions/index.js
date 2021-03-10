import axios from 'axios';
import { SET_FETCH_LOADING, SET_MOVIE_LIST,SET_SIMILAR_MOVIE, SET_UPCOMING_MOVIE } from '../types';


const baseURL = `https://api.themoviedb.org/3/movie`;
const API_KEY = 'dc0e8233ed2baf734a8e69292cded63e'; 
// const API_KEY = process.env.REACT_APP_API_KEY

export const setLoadFetching = (isLoad) => {
    return {
        type: SET_FETCH_LOADING,
        payload: isLoad
    }
}

export const setMovieList = (movies) => {
    return {
        type: SET_MOVIE_LIST,
        payload: movies
    }
}

export const fetchMovieList = (pageIndex) => {
    return (dispatch) => {
        dispatch(setLoadFetching(true))
        axios({
            method: 'GET',
            url: `${baseURL}/now_playing?api_key=${API_KEY}&language=en-US&page=${pageIndex}`
        })
        .then(({ data }) => {
            const { results } = data
            dispatch(setMovieList(results))
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(_ => {
            dispatch(setLoadFetching(false))
        })
    }
}

export const setSimilarMovie = (movies) => {
    return {
        type: SET_SIMILAR_MOVIE,
        payload: movies
    }
}

export const fetchSimilarMovie = (movieId) => {
    return (dispatch) => {
        dispatch(setLoadFetching(true))
        axios({
            method: 'GET',
            url: `${baseURL}/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`
        })
        .then(({ data }) => {
            const { results } = data
            dispatch(setSimilarMovie(results))
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(_ => {
            dispatch(setLoadFetching(false))
        })
    }
}

export const setUpcomingMovie = (movies) => {
    return {
        type: SET_UPCOMING_MOVIE,
        payload: movies
    }
}

export const fetchUpcomingMovie = () => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `${baseURL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`
        })
        .then(({ data }) => {
            const { results } = data
            dispatch(setUpcomingMovie(results))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}