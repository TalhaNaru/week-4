import { useState, useEffect } from 'react';
export function TitleEffect() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);
  return <button onClick={() => setcount(count + 1)}>Clicked {count}</button>;
}
