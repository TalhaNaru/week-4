import { useContext } from 'react';
import type { Country } from '../Country';
import { FilterContext } from '../context/FilterContext';
import { CountryCards } from './CountryCards';

type CountryGridProps = {
  countries: Country[];
  search: string;
};

export function CountryGrid({ countries, search }: CountryGridProps) {
  const { region } = useContext(FilterContext);
  const term = search.trim().toLowerCase();

  const visible = countries.filter((country) => {
    const matchesName = country.name.toLowerCase().includes(term);
    const matchesRegion = region === 'All' || country.region === region;
    return matchesName && matchesRegion;
  });
  if (visible.length === 0) {
    return <p className="text-gray-300">No countries match your search.</p>;
  }
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {visible.map((country) => (
        <CountryCards key={country.cca3 || country.name} country={country} />
      ))}
    </div>
  );
}
