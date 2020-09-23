import React from 'react';
import styled from 'styled-components';

const MoviesResultsNumberComponent = ({ className, moviesCount }) => (
  <span className={className}>{moviesCount}</span>
);

export const MoviesResultsNumber = styled(MoviesResultsNumberComponent)`
  font-size: 22px;
  font-weight: bold;
`;
