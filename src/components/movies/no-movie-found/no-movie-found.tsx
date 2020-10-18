import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

const NoMovieFoundComponent = ({ className }: Props) => (
  <span className={className}>No Movie Found</span>
);

const NoMovieFound = styled(NoMovieFoundComponent)`
  font-size: 50px;
  color: #ffffff;
  position: relative;
  left: 70%;
  white-space: nowrap;
`;

export default NoMovieFound;
