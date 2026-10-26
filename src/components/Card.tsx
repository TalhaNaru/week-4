import type { ReactNode } from 'react';

type CardProps = {
  title: string;
  children: ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <h2 className="mb-2 text-lg font-semibold text-red-900">{title}</h2>
      <div className="text-sm text-blue-600">{children}</div>
    </div>
  );
}
