import React from 'react';
import styled from 'styled-components';

import { HeaderSearchBtn } from './header-search-btn';
import { HeaderSearchInput } from './header-search-input';
import { HeaderSearchLine } from './header-search-line';
import { HeaderTitle } from './header-title';

interface Props {
  className?: string;
}

const HeaderSearchBlockComponent = ({ className }: Props) => (
  <section className={className}>
    <HeaderTitle>FIND YOUR MOVIE</HeaderTitle>
    <HeaderSearchLine>
      <HeaderSearchInput type="text" placeholder="What do you want to watch?" />
      <HeaderSearchBtn>SEARCH</HeaderSearchBtn>
    </HeaderSearchLine>
  </section>
);

const HeaderSearchBlock = styled(HeaderSearchBlockComponent)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 100px;
`;

export default HeaderSearchBlock;
