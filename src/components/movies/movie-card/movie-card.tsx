import React, { useState } from 'react';

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
}

const MovieCard = ({
  menuOptions,
  onMenuClick,
  image,
  title,
  genre,
  date,
  id,
}: Props) => {
  return (
    <div>
      <MovieImageSection>
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
        <MovieDescription>{date}</MovieDescription>
      </MovieSection>
    </div>
  );
};

export default MovieCard;
