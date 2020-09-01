import React from 'react';
import styled from 'styled-components';

import Logo from '../logo/logo';
import { FooterTitle } from './footer-title';

interface Props {
  className?: string;
}

const FooterComponent = ({ className }: Props) => (
  <div className={className}>
    <FooterTitle>
      <Logo />
    </FooterTitle>
  </div>
);

const Footer = styled(FooterComponent)`
  padding: 20px;
  background: #424242;
`;

export default Footer;
