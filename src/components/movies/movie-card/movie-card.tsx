import React, { useState } from 'react';
import styled from 'styled-components';

import MenuList from '../menu/menu';
import { Movie } from '../movies';
import { MovieDescription } from './movie-description';
import { MovieImage } from './movie-image';
import { MovieImageSection } from './movie-image-section';
import { MovieSection } from './movie-section';
import { MovieTitle } from './movie-title';

interface Props extends Movie {
  menuOptions: string[];
  onMenuClick?: (e: any) => void;
  onMovieCardClick?: (e: any) => void;
  className: string;
  image: string;
  title: string;
  genres: string[];
  release_date: string;
}

const MovieCardComponent = ({
  className,
  menuOptions,
  onMenuClick,
  onMovieCardClick,
  image,
  title,
  genres,
  release_date,
  id,
}: Props) => {
  return (
    <section
      className={className}
      onClick={() => {
        onMovieCardClick({ id });
      }}
    >
      <MovieImageSection>
        <MovieImage src={image} alt="movie" />
        <MenuList menuOptions={menuOptions} onMenuClick={onMenuClick} id={id} />
      </MovieImageSection>
      <MovieSection>
        <div>
          <MovieTitle title={title} />
          <MovieDescription genres={genres?.join(", ")} />
        </div>
        <MovieDescription release_date={release_date} />
      </MovieSection>
    </section>
  );
};

const MovieCard = styled(MovieCardComponent)`
  cursor: pointer;
`;

export default MovieCard;
