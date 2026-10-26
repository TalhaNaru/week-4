import { Button } from './Button';
import { Card } from './Card';

export function TailwindDemo() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-4 rounded-md bg-gray-100 p-4">
        <p className="font-medium text-gray-800">Layout: flex, gap, padding </p>
        <Button>Click Me</Button>
      </div>
      <input
        type="text"
        placeholder="Hover and focus me"
        className="w-full rounded-md border border-gray-300 px-3 py-2 hover:border-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="One">1 cloumn on mobile.</Card>
        <Card title="Two">2 columns from sm.</Card>
        <Card title="Three">4 columns from lg.</Card>
        <Card title="Four">Resize the window.</Card>
      </div>
    </section>
  );
}
