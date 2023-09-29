import React, { useState } from 'react';

export function GameScreenAction({ response }: { response: string }) {
  return (
    <section className="text-display-yellow text-2xl border-t-4 pt-2 border-display-yellow h-1/3">
      <span>{response}</span>
    </section>
  );
}
