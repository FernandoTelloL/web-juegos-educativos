import { useEffect, useRef } from 'react';

export const useHoverSound = (soundFile) => {
  const soundRef = useRef(null);

  useEffect(() => {
    soundRef.current = new Audio(soundFile);
  }, [soundFile]);

  const playSound = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  };

  return playSound;
};
