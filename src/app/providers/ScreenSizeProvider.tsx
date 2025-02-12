'use client';

import { type ReactNode, useEffect, useState } from 'react';

import {
  getScreenSize,
  ScreenSizeContext,
} from '@/shared/lib/hooks/useScreenSize';

export const ScreenSizeProvider = ({ children }: { children: ReactNode }) => {
  const [screenSize, setScreenSize] = useState(() => getScreenSize());

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
};
