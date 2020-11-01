import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchMovieById } from '../../../redux/actions/movie';
import { Movie } from '../movies';
import { MovieDetailsCover } from './movie-details-cover';
import { MovieDetailsDescription } from './movie-details-description';
import { MovieDetailsDuration } from './movie-details-duration';
import { MovieDetailsImage } from './movie-details-image';
import { MovieDetailsRating } from './movie-details-rating';
import { MovieDetailsReleaseDate } from './movie-details-release-date';
import { MovieDetailsTitle } from './movie-details-title';
import { MovieDetailsTitleBlock } from './movie-details-title-block';

interface Props {
  className: string;
  id?: string;
  currentMovie: Movie;
  fetchMovieById: any;
}

const MovieDetailsComponent = ({
  className,
  id,
  currentMovie,
  fetchMovieById,
}: Props) => {
  useEffect(() => {
    fetchMovieById(id);
  }, [id]);
  return (
    currentMovie && (
      <section className={className}>
        <MovieDetailsImage src={currentMovie.poster_path} alt="movie" />
        <div>
          <MovieDetailsTitleBlock>
            <MovieDetailsTitle title={currentMovie.title} />
            <MovieDetailsRating
              vote_average={currentMovie.vote_average}
            ></MovieDetailsRating>
          </MovieDetailsTitleBlock>
          <MovieDetailsCover tagline={currentMovie.tagline}></MovieDetailsCover>
          <MovieDetailsReleaseDate
            release_date={currentMovie.release_date}
          ></MovieDetailsReleaseDate>
          <MovieDetailsDuration
            runtime={currentMovie.runtime}
          ></MovieDetailsDuration>
          <MovieDetailsDescription
            overview={currentMovie.overview}
          ></MovieDetailsDescription>
        </div>
      </section>
    )
  );
};

const mapStateToProps = (state) => ({
  currentMovie: state.movies.currentMovie,
  loading: state.movies.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieById: (id: string) => dispatch(fetchMovieById(id)),
});

const MovieDetails = styled(MovieDetailsComponent)`
  padding: 20px 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  color: #ffffff;
  font-weight: 300;
`;

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
