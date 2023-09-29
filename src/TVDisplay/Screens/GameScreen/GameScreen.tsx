import React, { useEffect, useState } from 'react';

import { GameScreenDescriptor } from './GameScreenComponents/GameScreenDescriptor';
import { GameScreenHeader } from './GameScreenComponents/GameScreenHeader';
import { GameScreenInput } from './GameScreenComponents/GameScreenInput';
import { GameScreenAction } from './GameScreenComponents/GameScreenAction';

import typingSoundUrl from '../../../assets/audios/type.mp3';
import rainingSoundUrl from '../../../assets/audios/rain.mp3';

export interface GameScreenProps {
  title: string;
  description: string;
  response: string;
}

function preventTypingAudioPopInLoop(audio: HTMLAudioElement) {
  audio.addEventListener('timeupdate', () => {
    const buffer = 0.4;
    if (audio.currentTime > audio.duration - buffer) {
      audio.currentTime = 0;
      audio.play();
    }
  });
}

function loopRainSound(rainSound: HTMLAudioElement) {
  rainSound.addEventListener('timeupdate', () => {
    const buffer = 0.4;
    if (rainSound.currentTime > rainSound.duration - buffer) {
      rainSound.currentTime = 4000;
      rainSound.play();
    }
  });
}

export function GameScreen({ title, description, response }: GameScreenProps) {
  const [isWritingOnScreen, changeIsWritingOnScreen] = useState(true);

  const typingSound = new Audio(typingSoundUrl);
  preventTypingAudioPopInLoop(typingSound);

  const rainSound = new Audio(rainingSoundUrl);
  loopRainSound(rainSound);
  rainSound.volume = 0.1;
  rainSound.play();

  function toogleIsWritingOnScreen(value: boolean) {
    if (value) {
      typingSound.play();
    } else {
      typingSound.currentTime = 0;
      typingSound.pause();
    }
    changeIsWritingOnScreen(value);
  }

  return (
    <>
      <GameScreenHeader title={title} />
      <GameScreenDescriptor toogleIsWritingOnScreen={toogleIsWritingOnScreen} description={description} />
      <GameScreenAction toogleIsWritingOnScreen={toogleIsWritingOnScreen} response={response} />
      <GameScreenInput shouldWait={isWritingOnScreen} />
    </>
  );
}
