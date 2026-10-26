import type { Country } from '../Country';

type CountryCardsProps = {
  country: Country;
};

export function CountryCards({ country }: CountryCardsProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <img
        src={country.flag}
        alt={`Flag of ${country.name}`}
        className="h-36 w-full bg-gray-100 object-contain"
      />
      <div className="space-y-1 p-4">
        <h2 className="text-lg font-semibold text-gray-900">{country.name}</h2>
        <p className="text-sm text-gray-600">Capital: {country.capital}</p>
        <p className="text-sm text-gray-600">
          Population : {country.population.toLocaleString('en-US')}
        </p>
        <p className="text-sm text-gray-600">Region: {country.region}</p>
      </div>
    </article>
  );
}
