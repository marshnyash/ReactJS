import expect from 'expect';
import fetchMock from 'fetch-mock';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../actions/movie';
import * as types from './actionTypes';
import { fetchMovies, fetchMoviesError, fetchMoviesStart, fetchMoviesSuccess } from './movie';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const movies = [
  {
    budget: 0,
    genres: ["Action", "Adventure", "Science Fiction"],
    id: "447365",
    overview: "The third film based on Marvel's Guardians of the Galaxy.",
    poster_path:
      "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
    release_date: "2020-05-01",
    revenue: 0,
    runtime: null,
    tagline: "",
    title: "Guardians of the Galaxy Vol. 3",
    vote_average: 0,
    vote_count: 9,
  },
  {
    budget: 0,
    genres: ["Science Fiction", "Action", "Adventure"],
    id: "424785",
    overview: "Plot unknown.",
    poster_path:
      "https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg",
    release_date: "2019-06-26",
    revenue: 0,
    runtime: null,
    tagline: "",
    title: "Transformers 7",
    vote_average: 0,
    vote_count: 0,
  },
];
const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      "Content-type": "application/json",
    },
  });
};
const store = mockStore({});
function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
    })
  );
}

describe("async actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("creates FETCH_MOVIES_SUCCESS when fetching movies have been done 2", () => {
    fetchMock.getOnce(`/movies?sortOrder=desc&sortBy=release_date&null&null`, {
      headers: { "content-type": "application/json" },
      body: {
        success: true,
        data: movies,
      },
    });

    const expectedActions = [
      {
        type: types.FETCH_MOVIES_START,
      },
      {
        type: types.FETCH_MOVIES_SUCCESS,
        movies,
      },
      {
        type: types.FETCH_MOVIES_ERROR,

        error: "some error",
      },
    ];

    const store = mockStore({ movies: [] });

    return store.dispatch(actions.fetchMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("fetchMoviesSuccess: should fetch movies successfully", () => {
    const expectedAction = {
      type: types.FETCH_MOVIES_SUCCESS,
      movies,
    };
    expect(fetchMoviesSuccess(movies)).toEqual(expectedAction);
  });

  it("fetchMoviesStart: should start fetch movies", () => {
    const expectedAction = {
      type: types.FETCH_MOVIES_START,
    };
    expect(fetchMoviesStart()).toEqual(expectedAction);
  });

  it("fetchMoviesError: should fetch movies with error", () => {
    const expectedAction = {
      type: types.FETCH_MOVIES_ERROR,
      error: "Some error",
    };
    expect(fetchMoviesError("Some error")).toEqual(expectedAction);
  });
});
