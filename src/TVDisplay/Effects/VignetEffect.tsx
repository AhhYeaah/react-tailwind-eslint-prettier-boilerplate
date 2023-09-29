import React from 'react';
import vignetUrl from '../../assets/images/vignet.png';

export function VignetEffect() {
  return <img className="tvSize z-40 absolute pointer-events-none	" src={vignetUrl} />;
}
