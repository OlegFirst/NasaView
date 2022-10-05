import { useEffect, useState } from 'react';

interface WindowSize {
  width: number,
  height: number
};

export const useResize = (ref: any) => {
  const [windowSize, setWindowSize] = useState<WindowSize> ({
    width: 0,
    height: 0
  });

  const resizeListener = () => {
    setWindowSize({
      width: ref.current.clientWidth,
      height: ref.current.clientHeight
    });
  };

  useEffect(() => {
    window.addEventListener('resize', resizeListener);
    resizeListener();

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [ref]);

  return windowSize;
};