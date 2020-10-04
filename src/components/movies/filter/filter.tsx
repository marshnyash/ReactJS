import { FormControl, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import { FilterItem } from './filter-item';
import { FilterSection } from './filter-section';
import { useStyles } from './filter.styles';
import { SortTitle } from './sort-title';

interface Props {
  filters: string[];
  sort: string[];
  className: string;
  sortedValue: string;
  onFilterChange: (e: any) => void;
  onSortingChange: (e: any) => void;
}

const FilterComponent = ({
  filters,
  sort,
  className,
  onFilterChange,
  onSortingChange,
  sortedValue,
}: Props) => {
  const classes = useStyles();

  return (
    <div className={className}>
      <FilterSection>
        {filters?.map((filter) => (
          <FilterItem key={filter} onClick={() => onFilterChange(filter)}>
            {filter}
          </FilterItem>
        ))}
      </FilterSection>
      <FilterSection>
        <SortTitle>Sort By</SortTitle>
        <FormControl className={classes.formControl}>
          <Select
            value={sortedValue}
            onChange={(event) => onSortingChange(event.target.value)}
            className={classes.select}
          >
            {sort.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FilterSection>
    </div>
  );
};

const Filter = styled(FilterComponent)`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  margin: 15px 0;
  border-bottom: 1px solid #555555;
`;

export default React.memo(Filter);
