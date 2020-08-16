import React from 'react';

import { Item, LeftFilter, RightSort, TextSort, Wrapper } from './filter-styles';

const filter = ["all", "documentary", "comedy", "horror", "crime"];
const sort = ['Date', 'Genre', 'Title'];

const Filter = () => (
  <Wrapper>
    <LeftFilter>
      {filter.map((e) => (
        <Item>{e}</Item>
      ))}
    </LeftFilter>
    <RightSort>
        <TextSort>Sort By</TextSort>
        <select>
          {sort.map((value) => (
            <option>{value}</option>
          ))}
        </select>
    </RightSort>
  </Wrapper>
);

export default Filter;
