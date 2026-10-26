import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { FilterContext } from './FilterContext';
import type { Region } from './FilterContext';

type FilterProviderProps = {
  children: ReactNode;
};

export function FilterProvider({ children }: FilterProviderProps) {
  const [region, setRegion] = useState<Region>('All');

  const value = useMemo(() => ({ region, setRegion }), [region]);

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}
