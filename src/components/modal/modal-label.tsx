import React from 'react';
import styled from 'styled-components';

const ModalLabelComponent = ({ className, label }) => (
  <span className={className}>{label}</span>
);

export const ModalLabel = styled(ModalLabelComponent)`
  position: absolute;
  top: 5px;
  z-index: 1;
  left: 15px;
  color: #f65261;
  text-transform: uppercase;
  font-size: 12px;
`;
