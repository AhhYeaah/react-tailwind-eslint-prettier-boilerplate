import React from 'react';

import snowUrl from '../../assets/images/snow.gif';

export function SnowEffect() {
  return <img className="tvSize absolute z-10 opacity-[5%] pointer-events-none" src={snowUrl} />;
}
