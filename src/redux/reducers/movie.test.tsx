import { render } from '@testing-library/react';
import React from 'react';

import { Filters, Sorting } from '../../components/movies/movies';
import * as types from '../actions/actionTypes';
import reducer from './movie';

describe("movies reducer", () => {
  const initialState = {
    movies: [],
    loading: false,
    error: null,
    currentMovie: null,
    filter: Filters.All,
    sorting: Sorting.release_date,
    search: null,
  };
  const movies = [
    {
      budget: 0,
      genres: ["Action", "Adventure", "Science Fiction"],
      id: 447365,
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
      id: 424785,
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

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_MOVIES_START", () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_MOVIES_START,
      })
    ).toEqual({
      error: null,
      currentMovie: null,
      filter: Filters.All,
      sorting: Sorting.release_date,
      search: null,
      loading: true,
      movies: [],
    });
  });

  it("should handle FETCH_MOVIES_SUCCESS", () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_MOVIES_SUCCESS,
        movies,
      })
    ).toEqual({
      error: null,
      currentMovie: null,
      filter: Filters.All,
      sorting: Sorting.release_date,
      search: null,
      loading: false,
      movies,
    });
  });

  it("should handle FETCH_MOVIES_ERROR", () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_MOVIES_ERROR,
        error: "some error",
      })
    ).toEqual({
      error: "some error",
      currentMovie: null,
      filter: Filters.All,
      sorting: Sorting.release_date,
      search: null,
      loading: false,
      movies: [],
    });
  });
});
