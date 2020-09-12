import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

const LogoComponent = ({ className }: Props) => (
  <span className={className}>netflix</span>
);

const Logo = styled(LogoComponent)`
  font-size: 18px;
  color: #f65261;
`;

export default Logo;
