import { useState } from 'react';
import { useCountries } from './hooks/useCountries';
import { FilterProvider } from './context/FilterProvider';
import { SearchBox } from './components/SearchBox';
import { RegionPicker } from './components/RegionPicker';
import { CountryGrid } from './components/CountryGrid';

export default function App() {
  const { data, loading, error } = useCountries();
  const [search, setSearch] = useState('');

  return (
    <FilterProvider>
      <main className="mx-auto max-w-6xl space-y-6 p-4">
        <h1 className="text-3xl font-bold text-white-900">Country Explorer</h1>
        <div className="flex flex-col gap-3 sm:flex-row">
          <SearchBox value={search} onChange={setSearch} />
          <RegionPicker />
        </div>
        {loading && <p className="text-gray-300">Loading countries...</p>}
        {error && <p className="text-red-400">Error: {error}</p>}
        {!loading && !error && <CountryGrid countries={data} search={search} />}
      </main>
    </FilterProvider>
  );
}
