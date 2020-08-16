import React from 'react';

import { AddButton, HeaderTop, SearchBlock, SearchButton, SearchInput, SearchLine, TextLogo, Title, Wrapper } from './header-styles';

const Header = () => (
  <Wrapper>
    <HeaderTop>
      <TextLogo>netflix</TextLogo>
      <AddButton>+ ADD MOVIE</AddButton>
    </HeaderTop>

    <SearchBlock>
      <Title>FIND YOUR MOVIE</Title>
      <SearchLine>
        <SearchInput type="text" placeholder="What do you want to watch?"/>
        <SearchButton>SEARCH</SearchButton>
      </SearchLine>
    </SearchBlock>
  </Wrapper>
);

export default Header;
