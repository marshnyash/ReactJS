import React from 'react';
import styled from 'styled-components';

const MovieDetailsRatingComponent = ({ className, vote_average }) => <div className={className}>{vote_average}</div>;

export const MovieDetailsRating = styled(MovieDetailsRatingComponent)`
  border: 1px solid white;
  display: flex;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: green;
`;
