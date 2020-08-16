import React from 'react';

import { Block, Description, Image, Title } from './movie-card-styles';

const MovieCard = ({ title, image, genre, date }) => (
  <div>
    <Image src={image} alt="movie" />
    <Block>
      <div>
        <Title>{title}</Title>
        <Description>{genre}</Description>
      </div>
      <Description>{date}</Description>
    </Block>
  </div>
);

export default MovieCard;
