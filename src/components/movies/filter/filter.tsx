import React from 'react';
import styled from 'styled-components';

import { FilterItem } from './filter-item';
import { FilterSection } from './filter-section';
import { SortTitle } from './sort-title';

interface Props {
  filter: string[];
  sort: string[];
  className: string;
}

const FilterComponent = ({ filter, sort, className }: Props) => (
  <div className={className}>
    <FilterSection>
      {filter.map((e: string) => (
        <FilterItem key={e}>{e}</FilterItem>
      ))}
    </FilterSection>
    <FilterSection>
      <SortTitle>Sort By</SortTitle>
      <select>
        {sort.map((value: string) => (
          <option key={value}>{value}</option>
        ))}
      </select>
    </FilterSection>
  </div>
);

const Filter = styled(FilterComponent)`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  margin: 15px 0;
  padding: 15px 0;
  border-bottom: 1px solid #555555;
`;

export default Filter;
