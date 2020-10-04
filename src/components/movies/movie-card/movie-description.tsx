import React from 'react';
import styled from 'styled-components';

const MovieDescriptionComponent = ({ className, release_date, genres }) => (
  <p className={className}>{release_date || genres}</p>
);

export const MovieDescription = styled(MovieDescriptionComponent)`
  font-size: 14px;
  color: #ffffff;
  margin: 3px 0;
`;
