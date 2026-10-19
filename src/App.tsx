import { useState } from 'react';
import { TitleEffect } from './components/TitleEffect';
import { DependencyDemo } from './components/DependencyDemo';
import { Timer } from './components/Timer';

export default function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <>
      <h1>Country Explorer</h1>
      <TitleEffect />
      <DependencyDemo />
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? 'Hide' : 'Show'} timer
      </button>
      {showTimer && <Timer />}
    </>
  );
}
