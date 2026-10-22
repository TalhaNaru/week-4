import { useCallback, useRef, useState } from 'react';

export function RefDemo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const clicks = useRef(0);
  const [renders, setRenders] = useState(0);

  const handleFocus = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus input</button>
      <button
        onClick={() => {
          clicks.current += 1;
          console.log(`ref clicks: ${clicks.current}`);
        }}
      >
        Add to ref
      </button>
      <button onClick={() => setRenders(renders + 1)}>
        Re-render ({renders})
      </button>
    </div>
  );
}