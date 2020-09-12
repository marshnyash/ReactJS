import styled from 'styled-components';

import MenuList from '../menu/menu';

export const MovieImageSection = styled.div`
  position: relative;

  &:hover ${MenuList} {
    display: block;
  }
`;
