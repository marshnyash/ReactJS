import React from 'react';
import styled from 'styled-components';

const MovieDetailsReleaseDateComponent = ({ className, release_date }) => <span className={className}>{release_date}</span>;

export const MovieDetailsReleaseDate = styled(MovieDetailsReleaseDateComponent)`
  color: #f65261;
  font-size: 20px;
  margin-right: 20px;
`;