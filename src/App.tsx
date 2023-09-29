import React, { useState } from 'react';
import { TVDisplay } from './TVDisplay/TVDisplay';

export function App() {
  const [agreedToPlay, agree] = useState(false);

  return (
    <div className="bg-black h-screen w-screen flex-center flex-col">
      {!agreedToPlay && (
        <button className="rounded bg-white text-black h-[50px] w-[200px]" onClick={() => agree(true)}>
          Play.
        </button>
      )}
      {agreedToPlay && <TVDisplay />}
    </div>
  );
}
