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
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_SUCCESS,
  UPDATE_FILTER_ERROR,
  UPDATE_FILTER_START,
  UPDATE_FILTER_SUCCESS,
  UPDATE_SORTING_ERROR,
  UPDATE_SORTING_START,
  UPDATE_SORTING_SUCCESS,
} from './actionTypes';

export const fetchMovies = (search = "") => (dispatch, getState) => {
  const searchParams = search ? `search=${search}&searchBy=title` : null;
  const sortParams = `sortOrder=desc&sortBy=${getState()?.movies?.sorting}`;
  const filterParams =
    getState()?.movies?.filter === `All`
      ? null
      : `filter=${getState()?.movies?.filter}`;
  dispatch(fetchMoviesStart());

  fetch(
    `http://localhost:4000/movies?${sortParams}&${filterParams}&${searchParams}`
  )
    .then((res) => res.json())
    .then((result) => dispatch(fetchMoviesSuccess(result?.data)))
    .catch((e) => dispatch(fetchMoviesError(e)));
};
export const fetchMoviesSuccess = (movies: Movie[]) => ({
  type: FETCH_MOVIES_SUCCESS,
  movies,
});
export const fetchMoviesStart = () => ({
  type: FETCH_MOVIES_START,
});
export const fetchMoviesError = (error) => ({
  type: FETCH_MOVIES_ERROR,
  error,
});

export const fetchMovieById = (movieId: string) => (dispatch) => {
  dispatch(fetchMovieStart());
  fetch(`http://localhost:4000/movies/${movieId}`)
    .then((res) => res.json())
    .then((result) => dispatch(fetchMovieSuccess(result)))
    .catch((e) => dispatch(fetchMovieError(e)));
};
export const fetchMovieStart = () => ({
  type: FETCH_MOVIE_START,
});
export const fetchMovieError = (error) => ({
  type: FETCH_MOVIE_ERROR,
  error,
});
export const fetchMovieSuccess = (currentMovie: Movie) => ({
  type: FETCH_MOVIE_SUCCESS,
  currentMovie,
});

export const deleteMovieById = (movieId: string) => (dispatch) => {
  dispatch(deleteMovieStart());
  fetch(`http://localhost:4000/movies/${movieId}`, {
    method: "DELETE",
  })
    .then(() => dispatch(deleteMovieSuccess(movieId)))
    .catch((e) => dispatch(deleteMovieError(e)));
};
export const deleteMovieSuccess = (id) => ({
  type: DELETE_MOVIE_SUCCESS,
  id,
});
export const deleteMovieStart = () => ({
  type: DELETE_MOVIE_START,
});
export const deleteMovieError = (error) => ({
  type: DELETE_MOVIE_ERROR,
  error,
});

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
export const createMovieSuccess = (currentMovie: Movie) => ({
  type: CREATE_MOVIE_SUCCESS,
  currentMovie,
});
export const createMovieStart = () => ({
  type: CREATE_MOVIE_START,
});
export const createMovieError = (error) => ({
  type: CREATE_MOVIE_ERROR,
  error,
});

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
export const editMovieSuccess = (movie: Movie) => ({
  type: EDIT_MOVIE_SUCCESS,
  movie,
});
export const editMovieStart = () => ({
  type: EDIT_MOVIE_START,
});
export const editMovieError = (error) => ({
  type: EDIT_MOVIE_ERROR,
  error,
});

export const updateFilters = (filter: string) => (dispatch, getState) => {
  const filterParams = filter && filter === "All" ? null : `filter=${filter}`;
  const sortParams = `sortOrder=desc&sortBy=${getState()?.movies?.sorting}`;
  const searchParams = getState()?.movies?.search
    ? `search=${getState()?.movies?.search}&searchBy=title`
    : null;
  dispatch(updateFiltersStart());
  fetch(
    `http://localhost:4000/movies?${filterParams}&${sortParams}&${searchParams}`
  )
    .then((res) => res.json())
    .then((result) => dispatch(updateFiltersSuccess(result?.data, filter)))
    .catch((e) => dispatch(updateFiltersError(e)));
};
export const updateFiltersStart = () => ({
  type: UPDATE_FILTER_START,
});
export const updateFiltersSuccess = (movies: Movie[], filter: string) => ({
  type: UPDATE_FILTER_SUCCESS,
  movies,
  filter,
});
export const updateFiltersError = (error) => ({
  type: UPDATE_FILTER_ERROR,
  error,
});

export const updateSorting = (sorting: string) => (dispatch, getState) => {
  const sortParams = `sortOrder=desc&sortBy=${sorting}`;
  const filterParams =
    getState()?.movies?.filter === `All`
      ? null
      : `filter=${getState()?.movies?.filter}`;
  const searchParams = getState()?.movies?.search
    ? `search=${getState()?.movies?.search}&searchBy=title`
    : null;
  dispatch(updateSortingStart());
  fetch(
    `http://localhost:4000/movies?${sortParams}&${filterParams}&${searchParams}`
  )
    .then((res) => res.json())
    .then((result) => dispatch(updateSortingSuccess(result?.data, sorting)))
    .catch((e) => dispatch(updateSortingError(e)));
};
export const updateSortingStart = () => ({
  type: UPDATE_SORTING_START,
});
export const updateSortingSuccess = (movies: Movie[], sorting: string) => ({
  type: UPDATE_SORTING_SUCCESS,
  movies,
  sorting,
});
export const updateSortingError = (error) => ({
  type: UPDATE_SORTING_ERROR,
  error,
});

export const searchMovie = (search: string) => (dispatch, getState) => {
  const searchParams = search ? `search=${search}&searchBy=title` : null;
  const sortParams = `sortOrder=desc&sortBy=${getState()?.movies?.sorting}`;
  const filterParams =
    getState()?.movies?.filter === `All`
      ? null
      : `filter=${getState()?.movies?.filter}`;
  dispatch(searchMovieStart());
  fetch(
    `http://localhost:4000/movies?${sortParams}&${filterParams}&${searchParams}`
  )
    .then((res) => res.json())
    .then((result) => dispatch(searchMovieSuccess(result?.data, search)))
    .catch((e) => dispatch(searchMovieError(e)));
};
export const searchMovieStart = () => ({
  type: SEARCH_MOVIE_START,
});
export const searchMovieSuccess = (movies: Movie[], search: string) => ({
  type: SEARCH_MOVIE_SUCCESS,
  movies,
  search,
});
export const searchMovieError = (error) => ({
  type: SEARCH_MOVIE_ERROR,
  error,
});
