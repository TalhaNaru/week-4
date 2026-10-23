import { useCountries } from './hooks/useCountries';
import { FilterProvider } from './context/FilterProvider';
import { RefDemo } from './components/RefDemo';
import { RegionPicker } from './components/RegionPicker';
import { RegionLabel } from './components/RegionLabel';

export default function App() {
  const { data, loading, error } = useCountries();

  return (
    <FilterProvider>
      <h1>Country Explorer</h1>
      <RefDemo />
      <RegionPicker />
      <RegionLabel />
      {loading && <p>Loading countries...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {data.map((country) => (
            <li key={country.cca3}>{country.name}</li>
          ))}
        </ul>
      )}
    </FilterProvider>
  );
}
