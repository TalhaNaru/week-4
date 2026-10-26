import { useEffect, useState } from 'react';
import type { Country } from '../Country';

type ApiCountry = {
  codes: { alpha_3: string };
  names: { common: string };
  capitals?: { name: string }[];
  population: number;
  region: string;
  flag: { url_svg: string };
};

type ApiResponse = {
  data: { objects: ApiCountry[]; meta: { more: boolean } };
};

const BASE_URL = 'https://api.restcountries.com/countries/v5';
const FIELDS =
  'names.common,capitals,population,region,codes.alpha_3,flag.url_svg';
const PAGE_SIZE = 100;
const API_KEY = import.meta.env.VITE_RESTCOUNTRIES_KEY as string | undefined;

export function useCountries(): {
  data: Country[];
  loading: boolean;
  error: string | null;
} {
  const [data, setData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        if (!API_KEY) {
          throw new Error('Missing API key: set VITE_RESTCOUNTRIES_KEY');
        }

        const all: ApiCountry[] = [];
        let offset = 0;
        let more = true;

        while (more) {
          const response = await fetch(
            `${BASE_URL}?response_fields=${FIELDS}&limit=${PAGE_SIZE}&offset=${offset}`,
            {
              headers: { Authorization: `Bearer ${API_KEY}` },
              signal: controller.signal,
            },
          );
          if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }
          const json = (await response.json()) as ApiResponse;
          all.push(...json.data.objects);
          more = json.data.meta.more;
          offset += PAGE_SIZE;
        }

        setData(
          all.map((item) => ({
            cca3: item.codes.alpha_3,
            name: item.names.common,
            capital: item.capitals?.[0]?.name ?? 'N/A',
            population: item.population ?? 0,
            region: item.region,
            flag: item.flag.url_svg,
          })),
        );
      } catch (err) {
        if (controller.signal.aborted) return;
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    load();

    return () => controller.abort();
  }, []);

  return { data, loading, error };
}
