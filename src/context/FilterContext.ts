import { createContext } from 'react';

export type Region =
  'All' | 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

export type FilterContextValue = {
  region: Region;
  setRegion: (region: Region) => void;
};
export const FilterContext = createContext<FilterContextValue | null>(null);
