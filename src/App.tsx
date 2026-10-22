import { useCountries } from './hooks/useCountries';

export default function App() {
  const { data, loading, error } = useCountries();

  if (loading) {
    return <p>Loading countries...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {data.map((country) => (
        <li key={country.cca3}>{country.name}</li>
      ))}
    </ul>
  );
}
