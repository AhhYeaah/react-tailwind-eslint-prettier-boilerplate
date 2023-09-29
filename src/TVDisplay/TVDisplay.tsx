import React, { useState } from 'react';
import { ScanlineEffect } from './Effects/ScanlineEffect';
import { SnowEffect } from './Effects/SnowEffect';
import { VignetEffect } from './Effects/VignetEffect';
import { GameScreen } from './Screens/GameScreen/GameScreen';
import './TVDisplay.css';

const tree = {
  walk: {
    things: ['house', 'threes'],
  },
};

export function TVDisplay() {
  return (
    <div className="select-none">
      <SnowEffect />
      <VignetEffect />
      <ScanlineEffect />
      <div className="tvSize px-6 py-9 blur-[1px] bg-display-brown flex flex-col wobble border-4 border-black">
        <GameScreen
          title="The strange house"
          description={`The house is grand, sat perfectly amongst the trees.\n
     In front of you is the front door, and the yard stretches around the side of the house.`}
          response="You step inside the front door..."
        />
      </div>
    </div>
  );
}
