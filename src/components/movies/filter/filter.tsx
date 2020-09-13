import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FilterItem } from './filter-item';
import { FilterSection } from './filter-section';
import { SortTitle } from './sort-title';

interface Props {
  filters: string[];
  sort: string[];
  className: string;
  onFilterChange: (e: any) => void;
}

const FilterComponent = ({ filters, sort, className, onFilterChange }: Props) => (
  <div className={className}>
    <FilterSection>
      {filters?.map((filter: string) => (
        <FilterItem key={filter} onClick={() => onFilterChange({ filter })}>
          {filter}
        </FilterItem>
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
  border-bottom: 1px solid #555555;
`;

export default Filter;
