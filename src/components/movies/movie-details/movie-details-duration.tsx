import React from 'react';
import styled from 'styled-components';

const MovieDetailsDurationComponent = ({ className, runtime }) => <span className={className}>{runtime} min</span>;

export const MovieDetailsDuration = styled(MovieDetailsDurationComponent)`
  color: #f65261;
  font-size: 20px;
`;