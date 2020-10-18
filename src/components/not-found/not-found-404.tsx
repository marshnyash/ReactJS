import React from 'react';
import styled from 'styled-components';

const NotFound404Component = ({ className, content }) => (
  <div className={className}>{content}</div>
);

export const NotFound404 = styled(NotFound404Component)`
  font-size: 200px;
  font-weight: bold;
  text-shadow: -10px 0px 0px #f65261;
`;
