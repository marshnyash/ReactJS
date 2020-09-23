import { Movie } from '../../components/movies/movies';
import {
  CREATE_MOVIE_ERROR,
  CREATE_MOVIE_START,
  CREATE_MOVIE_SUCCESS,
  DELETE_MOVIE_ERROR,
  DELETE_MOVIE_START,
  DELETE_MOVIE_SUCCESS,
  EDIT_MOVIE_ERROR,
  EDIT_MOVIE_START,
  EDIT_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  FETCH_MOVIE_START,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  UPDATE_FILTER_ERROR,
  UPDATE_FILTER_START,
  UPDATE_FILTER_SUCCESS,
  UPDATE_SORTING_ERROR,
  UPDATE_SORTING_START,
  UPDATE_SORTING_SUCCESS,
} from './actionTypes';

export const fetchMovies = () => (dispatch) => {
  dispatch(fetchMoviesStart());

  fetch("http://localhost:4000/movies")
    .then((res) => res.json())
    .then((result) => dispatch(fetchMoviesSuccess(result?.data)))
    .catch((e) => dispatch(fetchMoviesError(e)));
};
export const fetchMoviesSuccess = (movies: Movie[]) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies,
  };
};
export const fetchMoviesStart = () => {
  return {
    type: FETCH_MOVIES_START,
  };
};
export const fetchMoviesError = (error) => {
  return {
    type: FETCH_MOVIES_ERROR,
    error,
  };
};

export const fetchMovieById = (movieId: string) => (dispatch) => {
  dispatch(fetchMovieStart());
  fetch(`http://localhost:4000/movies/${movieId}`)
    .then((res) => res.json())
    .then((result) => dispatch(fetchMovieSuccess(result)))
    .catch((e) => dispatch(fetchMovieError(e)));
};
export const fetchMovieStart = () => {
  return {
    type: FETCH_MOVIE_START,
  };
};
export const fetchMovieError = (error) => {
  return {
    type: FETCH_MOVIE_ERROR,
    error,
  };
};
export const fetchMovieSuccess = (currentMovie: Movie) => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    currentMovie,
  };
};

export const deleteMovieById = (movieId: string) => (dispatch) => {
  dispatch(deleteMovieStart());
  fetch(`http://localhost:4000/movies/${movieId}`, {
    method: "DELETE",
  })
    .then(() => dispatch(deleteMovieSuccess(movieId)))
    .catch((e) => dispatch(deleteMovieError(e)));
};
export const deleteMovieSuccess = (id) => {
  return {
    type: DELETE_MOVIE_SUCCESS,
    id,
  };
};
export const deleteMovieStart = () => {
  return {
    type: DELETE_MOVIE_START,
  };
};
export const deleteMovieError = (error) => {
  return {
    type: DELETE_MOVIE_ERROR,
    error,
  };
};

export const createMovie = (data: Movie) => (dispatch) => {
  dispatch(createMovieStart());
  fetch(`http://localhost:4000/movies`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => dispatch(createMovieSuccess(result)))
    .catch((e) => dispatch(createMovieError(e)));
};
export const createMovieSuccess = (currentMovie: Movie) => {
  return {
    type: CREATE_MOVIE_SUCCESS,
    currentMovie,
  };
};
export const createMovieStart = () => {
  return {
    type: CREATE_MOVIE_START,
  };
};
export const createMovieError = (error) => {
  return {
    type: CREATE_MOVIE_ERROR,
    error,
  };
};

export const editMovie = (data: Movie) => (dispatch) => {
  dispatch(editMovieStart());
  fetch(`http://localhost:4000/movies`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => dispatch(editMovieSuccess(result)))
    .catch((e) => dispatch(editMovieError(e)));
};
export const editMovieSuccess = (movie: Movie) => {
  return {
    type: EDIT_MOVIE_SUCCESS,
    movie,
  };
};
export const editMovieStart = () => {
  return {
    type: EDIT_MOVIE_START,
  };
};
export const editMovieError = (error) => {
  return {
    type: EDIT_MOVIE_ERROR,
    error,
  };
};

export const updateFilters = (filter: string) => (dispatch) => {
  const params = filter && filter === "All" ? "" : `filter=${filter}`;
  dispatch(updateFiltersStart());
  fetch(`http://localhost:4000/movies?${params}`)
    .then((res) => res.json())
    .then((result) => dispatch(updateFiltersSuccess(result?.data, filter)))
    .catch((e) => dispatch(updateFiltersError(e)));
};
export const updateFiltersStart = () => {
  return {
    type: UPDATE_FILTER_START,
  };
};
export const updateFiltersSuccess = (movies: Movie[], filter: string) => {
  return {
    type: UPDATE_FILTER_SUCCESS,
    movies,
    filter,
  };
};
export const updateFiltersError = (error) => {
  return {
    type: UPDATE_FILTER_ERROR,
    error,
  };
};

export const updateSorting = (sorting: string) => (dispatch) => {
  const params = `sortOrder=desc&sortBy=${sorting}`;
  dispatch(updateSortingStart());
  fetch(`http://localhost:4000/movies?${params}`)
    .then((res) => res.json())
    .then((result) => dispatch(updateSortingSuccess(result?.data, sorting)))
    .catch((e) => dispatch(updateSortingError(e)));
};
export const updateSortingStart = () => {
  return {
    type: UPDATE_SORTING_START,
  };
};
export const updateSortingSuccess = (movies: Movie[], sorting: string) => {
  return {
    type: UPDATE_SORTING_SUCCESS,
    movies,
    sorting,
  };
};
export const updateSortingError = (error) => {
  return {
    type: UPDATE_SORTING_ERROR,
    error,
  };
};
