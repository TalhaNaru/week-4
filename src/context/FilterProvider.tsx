import { useState } from 'react';
import type { ReactNode } from 'react';
import { FilterContext } from './FilterContext';
import type { Region } from './FilterContext';

type FilterProviderProps = {
  children: ReactNode;
};

export function FilterProvider({ children }: FilterProviderProps) {
  const [region, setRegion] = useState<Region>('All');

  return (
    <FilterContext.Provider value={{ region, setRegion }}>
      {children}
    </FilterContext.Provider>
  );
}
