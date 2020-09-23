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
}

const MovieCardComponent = ({
  className,
  menuOptions,
  onMenuClick,
  onMovieCardClick,
  image,
  title,
  genre,
  releaseDate,
  id,
}: Props) => {
  return (
    <section className={className} onClick={() => {
      onMovieCardClick({ id });
    }}>
      <MovieImageSection >
        <MovieImage src={image} alt="movie" />
        <MenuList
          menuOptions={menuOptions}
          onMenuClick={onMenuClick}
        ></MenuList>
      </MovieImageSection>
      <MovieSection>
        <div>
          <MovieTitle>{title}</MovieTitle>
          <MovieDescription>{genre}</MovieDescription>
        </div>
        <MovieDescription >{releaseDate}</MovieDescription>
      </MovieSection>
    </section>
  );
};

const MovieCard = styled(MovieCardComponent)`
  cursor: pointer;
`;

export default MovieCard;
