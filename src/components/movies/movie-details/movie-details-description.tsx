import React from 'react';
import styled from 'styled-components';

const MovieDetailsDescriptionComponent = ({ className, overview }) => <div className={className}>{overview}</div>;

export const MovieDetailsDescription = styled(MovieDetailsDescriptionComponent)`
  font-size: 16px;
  margin-top: 20px;
`;



