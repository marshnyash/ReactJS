import React from 'react';
import styled from 'styled-components';

const MovieTitleComponent = ({ className, title }) => (
  <p className={className}>{title}</p>
);
export const MovieTitle = styled(MovieTitleComponent)`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin: 3px 0;
`;



