import React, { useEffect } from 'react';
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
  id?: string;
}

const movie: Movie = {
  title: "How to train your dragon",
  image: "src/assets/images/how-to-train-your-dragon.jpg",
  genre: "cartoon",
  releaseDate: 2019,
  id: "rick001",
  description:
    "How to Train Your Dragon is a 2010 American computer-animated action fantasy film produced by DreamWorks Animation and distributed by Paramount Pictures loosely based on the 2003 book of the same name by Cressida Cowell. The film was directed by Chris Sanders and Dean DeBlois from a screenplay by Will Davies, Sanders, and DeBlois, and stars the voices of Jay Baruchel, Gerard Butler, Craig Ferguson, America Ferrera, Jonah Hill, Christopher Mintz-Plasse, T.J. Miller, and Kristen Wiig.",
  rating: 4.5,
  cover: "Oscar winning Movie",
  duration: 154,
};

const MovieDetailsComponent = ({ className, id }: Props) => {
  useEffect(() => {
    const movie$ = new Promise((resolve, reject) => {
      resolve(movie);
    });
    movie$.then((response) => console.log("response", response));
  }, [id]);

  return (
    <section className={className}>
      <MovieDetailsImage src={movie.image} alt="movie" />
      <div>
        <MovieDetailsTitleBlock>
          <MovieDetailsTitle>{movie.title}</MovieDetailsTitle>
          <MovieDetailsRating>{movie.rating}</MovieDetailsRating>
        </MovieDetailsTitleBlock>
        <MovieDetailsCover>{movie.cover}</MovieDetailsCover>
        <MovieDetailsReleaseDate>{movie.releaseDate}</MovieDetailsReleaseDate>
        <MovieDetailsDuration>{movie.duration} min</MovieDetailsDuration>
        <MovieDetailsDescription>{movie.description}</MovieDetailsDescription>
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
