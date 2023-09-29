import React from 'react';

export function GameScreenHeader({ title }: { title: string }) {
  return (
    <header className="flex-center h-[35px] text-xl bg-display-yellow text-display-brown">
      <span>{`${title.toUpperCase()} - BY MATHEUS`}</span>
    </header>
  );
}
