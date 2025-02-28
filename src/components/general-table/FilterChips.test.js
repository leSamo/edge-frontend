import React from 'react';
import FilterChips from './FilterChips';
import { render } from '@testing-library/react';

describe('Filter chips', () => {
  it('should render correctly', async () => {
    const filterValues = [
      { type: 'text', label: 'test-key', value: 'test-label' },
    ];
    const chipsArray = [{ key: 'test-key', label: 'test-label' }];
    const setFilterValues = jest.fn();
    const setChipsArray = jest.fn();

    const { findByTestId, findByText } = render(
      <FilterChips
        filterValues={filterValues}
        setFilterValues={setFilterValues}
        chipsArray={chipsArray}
        setChipsArray={setChipsArray}
      />
    );

    const FilterChipsElement = await findByTestId('filter-chip');
    const FilterChipsGroupLabel = await findByText('test-key');
    const FilterChipLabel = await findByText('test-label');
    const FilterChipsClearFilters = await findByText('Clear filters');

    expect(FilterChipsElement).toBeDefined();
    expect(FilterChipsGroupLabel).toBeDefined();
    expect(FilterChipLabel).toBeDefined();
    expect(FilterChipsClearFilters).toBeDefined();
    expect(setFilterValues).not.toHaveBeenCalled();
    expect(setChipsArray).toHaveBeenCalled();
  });
});
