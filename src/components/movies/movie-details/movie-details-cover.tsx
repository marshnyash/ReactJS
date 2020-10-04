import React from 'react';
import styled from 'styled-components';

const MovieDetailsCoverComponent = ({ className, tagline }) => <div className={className}>{tagline}</div>;

export const MovieDetailsCover = styled(MovieDetailsCoverComponent)`
  margin-bottom: 20px;
`;
