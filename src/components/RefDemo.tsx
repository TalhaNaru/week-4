import { useRef, useState } from 'react';

export function RefDemo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const clicks = useRef(0);
  const [renders, setrenders] = useState(0);

  function HandleFocus() {
    inputRef.current?.focus();
  }

  function HandleRefClicks() {
    clicks.current += 1;
    console.log(`ref clicks: ${clicks.current} (no re-render)`);
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Focus me with the button"
      />
      <button onClick={HandleFocus}>Focus input</button>
      <button onClick={HandleRefClicks}>Add to ref (see console)</button>
      <button onClick={() => setrenders(renders + 1)}>
        Re-render ({renders})
      </button>
    </div>
  );
}
