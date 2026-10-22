import { useFilter } from '../context/useFilter';

export function RegionLabel() {
  const { region } = useFilter();

  return <p>Selected region: {region}</p>;
}
