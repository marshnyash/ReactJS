import { Filters, Sorting } from '../../components/movies/movies';
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
} from '../actions/actionTypes';

const initialState = {
  movies: [],
  loading: false,
  error: null,
  currentMovie: null,
  filter: Filters.All,
  sorting: Sorting.release_date,
  search: null,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.movies,
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        currentMovie: action.currentMovie,
      };
    case FETCH_MOVIE_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case CREATE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, action.currentMovie],
      };
    case CREATE_MOVIE_START:
      return {
        ...state,
        loading: true,
      };
    case CREATE_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: [...state.movies.filter((el) => el.id !== action.id)],
      };
    case DELETE_MOVIE_START:
      return {
        ...state,
        loading: true,
      };
    case DELETE_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case EDIT_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.map((el) =>
          el.id === action.movie.id ? action.movie : el
        ),
      };
    case EDIT_MOVIE_START:
      return {
        ...state,
        loading: true,
      };
    case EDIT_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case UPDATE_FILTER_SUCCESS:
      return {
        ...state,
        movies: action.movies,
        filter: action.filter,
      };
    case UPDATE_FILTER_START:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_FILTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case UPDATE_SORTING_SUCCESS:
      return {
        ...state,
        movies: action.movies,
        sorting: action.sorting,
      };
    case UPDATE_SORTING_START:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SORTING_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        movies: action.movies,
        search: action.search,
      };
    case SEARCH_MOVIE_START:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
