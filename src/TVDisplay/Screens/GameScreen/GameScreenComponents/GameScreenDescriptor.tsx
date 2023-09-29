import React, { useEffect, useState } from 'react';

export function GameScreenDescriptor({ description, toogleIsWritingOnScreen }: { description: string }) {
  const [stringToShow, changeStringToShow] = useState('');

  useEffect(() => {
    toogleIsWritingOnScreen(true);
    let i = 0;

    const interval = setInterval(() => {
      if (i < description.length) {
        changeStringToShow((sts) => sts + description[i++]);
      } else {
        toogleIsWritingOnScreen(false);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [description]);

  return (
    <main className="h-2/3 pt-2">
      <p className="text-display-yellow text-2xl">{stringToShow}</p>
    </main>
  );
}
