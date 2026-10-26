type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search countries by name..."
      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-500 hover:border-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
  );
}
