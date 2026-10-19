import { useState, useEffect } from 'react';

export function DependencyDemo() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    console.log(`A : no array, runs after every render`);
  });
  useEffect(() => {
    console.log(`B : empty array, runs once on mount `);
  }, []);
  useEffect(() => {
    console.log(`C : [count] runs when count changes (${count})`);
  }, [count]);
  return <button onClick={() => setcount(count + 1)}>Count{count}</button>;
}
