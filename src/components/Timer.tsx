import { useState, useEffect } from 'react';

export function Timer() {
  const [seconds, setseconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setseconds((s) => s + 1);
    }, 1000);
    return () => {
      console.log(`Cleanup:Timer Stopped`);
      clearInterval(id);
    };
  }, []);
  return <p>Seconds{seconds}</p>;
}
