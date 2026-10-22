import { useContext } from 'react';
import { FilterContext } from './FilterContext';

export function useFilter() {
  const value = useContext(FilterContext);
  if (value === null) {
    throw new Error('useFilter must be used inside FilterProvider');
  }
  return value;
}
