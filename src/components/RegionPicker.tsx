import { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import type { Region } from '../context/FilterContext';

const regions: Region[] = [
  'All',
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
];

export function RegionPicker() {
  const { region, setRegion } = useContext(FilterContext);

  return (
    <select
      className="shrink-0 rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 hover:border-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
      value={region}
      onChange={(event) => setRegion(event.target.value as Region)}
    >
      {regions.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}