import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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
  id?: {id: string};
}

const MovieDetailsComponent = ({ className, id }: Props) => {
  const [movie, setMovie] = useState(null);
  
  useEffect(() => {
    console.log('id', id);
    fetch(`http://localhost:4000/movies/${id?.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result2', result);
          setMovie(result);
        },
        (error) => {
          console.log('error', error);
        }
      )
  }, [id]);

  return (
    <section className={className}>
      <MovieDetailsImage src={movie?.poster_path} alt="movie" />
      <div>
        <MovieDetailsTitleBlock>
          <MovieDetailsTitle title={movie?.title} />
          <MovieDetailsRating vote_average={movie?.vote_average}></MovieDetailsRating>
        </MovieDetailsTitleBlock>
        <MovieDetailsCover tagline={movie?.tagline}></MovieDetailsCover>
        <MovieDetailsReleaseDate release_date={movie?.release_date}></MovieDetailsReleaseDate>
        <MovieDetailsDuration runtime={movie?.runtime}></MovieDetailsDuration>
        <MovieDetailsDescription overview={movie?.overview}></MovieDetailsDescription>
      </div>
    </section>
  );
};

const MovieDetails = styled(MovieDetailsComponent)`
  padding: 20px 40px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 40px;
  color: #ffffff;
  font-weight: 300;
`;

export default MovieDetails;
