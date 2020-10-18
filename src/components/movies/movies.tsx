import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteProps } from 'react-router';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { MoviesWrapper } from './movies-wrapper';

import { fetchMovies, updateFilters, updateSorting } from '../../redux/actions/movie';
import Filter from './filter/filter';
import MovieCard from './movie-card/movie-card';
import { MoviesResults } from './movies-results';
import { MoviesResultsNumber } from './movies-results-number';
import NoMovieFound from './no-movie-found/no-movie-found';

export interface Movie {
  budget: number;
  genres: string[];
  id: string;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

interface Props extends RouteProps {
  className: string;
  fetchMovies: any;
  movies: Movie[];

  editMovie?: (e: any) => void;
  updateFilters: any;
  updateSorting: any;
  deleteMovieById: any;
  genresOptions: string[];
  sorting: string;
}

export enum Filters {
  All = "All",
  Documentary = "Documentary",
  Comedy = "Comedy",
  Horror = "Horror",
  Crime = "Crime",
}

export enum Sorting {
  release_date = "release_date",
  title = "title",
  genres = "genres",
}

const filters = [
  Filters.All,
  Filters.Documentary,
  Filters.Comedy,
  Filters.Crime,
  Filters.Horror,
];
const sort = [Sorting.release_date, Sorting.genres, Sorting.title];

const MoviesContainerComponent = ({
  className,
  fetchMovies,
  movies,
  updateFilters,
  updateSorting,
  genresOptions,
  sorting,
}: Props) => {
  let match = useParams();

  useEffect(() => fetchMovies(match?.searchQuery), []);

  const handleFilterMovies = useCallback((filter) => updateFilters(filter), []);

  return (
    <>
      <section className={className}>
        <Filter
          filters={filters}
          sort={sort}
          sortedValue={sorting}
          onFilterChange={(filter: string) => handleFilterMovies(filter)}
          onSortingChange={(sorting: string) => updateSorting(sorting)}
        />
        <MoviesResults>
          <MoviesResultsNumber moviesCount={movies?.length} />
          &nbsp;movies found
        </MoviesResults>
        <MoviesWrapper>
          {movies?.length ? (
            movies.map(({ title, id, poster_path, genres, release_date }) => (
              <MovieCard
                title={title}
                key={id}
                image={poster_path}
                genres={genres}
                release_date={release_date}
                id={id}
                genresOptions={genresOptions}
              />
            ))
          ) : (
            <NoMovieFound />
          )}
        </MoviesWrapper>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  loading: state.movies.loading,
  filter: state.movies.filter,
  sorting: state.movies.sorting,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (data: string) => dispatch(fetchMovies(data)),
  updateFilters: (filter: string) => dispatch(updateFilters(filter)),
  updateSorting: (sorting: string) => dispatch(updateSorting(sorting)),
});

const MoviesContainer = styled(MoviesContainerComponent)`
  padding: 10px 40px 40px;
  background: #232323;
  min-height: calc(100vh - 570px);
`;
export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
