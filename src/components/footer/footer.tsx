import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  color: #f65261;
`;

const Wrapper = styled.section`
  padding: 20px;
  background: #424242;
`;

const Footer = () => (
  <Wrapper>
    <Title>netflix</Title>
  </Wrapper>
);

export default Footer;
