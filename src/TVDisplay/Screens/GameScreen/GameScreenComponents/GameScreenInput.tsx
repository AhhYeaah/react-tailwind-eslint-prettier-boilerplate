import React, { useEffect, useRef } from 'react';

function placeholderText(shouldWait: boolean) {
  return shouldWait ? ':<<WAIT>>' : ':<<TYPE>>';
}

function elementOpacity(shouldWait: boolean, isFirstTime: boolean) {
  if (shouldWait) {
    return 'opacity-50';
  } else {
    if (!isFirstTime) {
      return 'opacity-90';
    }
    return 'animate-pulse';
  }
}

export function GameScreenInput({ shouldWait }: { shouldWait: boolean }) {
  const [firstTime, setFirstTime] = React.useState(true);
  const inputFocus = useRef(null);

  return (
    <footer className="border-t-8 border-display-yellow">
      <input
        placeholder={placeholderText(shouldWait)}
        className={
          'w-full text-[#b7bac2] bg-[#444645] px-2 text-2xl mt-1 rounded outline-none ' +
          elementOpacity(shouldWait, firstTime)
        }
        onFocus={() => setFirstTime(false)}
        ref={inputFocus}
        disabled={shouldWait}
      />
    </footer>
  );
}
