import React from 'react';
import scanlinesUrl from '../../assets/images/scanlines.png';

export function ScanlineEffect() {
  return <img src={scanlinesUrl} className="tvSize z-30 opacity-80 absolute pointer-events-none	" />;
}
