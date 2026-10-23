import { useFilter } from '../context/useFilter';
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
  const { region, setRegion } = useFilter();

  return (
    <select
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
