import React from 'react';
import styled from 'styled-components';

const MovieDetailsTitleComponent = ({ className, title }) => <p className={className}>{title}</p>;

export const MovieDetailsTitle = styled(MovieDetailsTitleComponent)`
  font-size: 40px;
  margin: 10px 0;
`;
