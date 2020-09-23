// import React from 'react';
import styled from 'styled-components';

// const MoviesWrapperComponent = ({ className, moviesList }) => (
//   <div className={className}>{moviesList}</div>
// );

export const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
