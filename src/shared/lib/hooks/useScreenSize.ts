'use client';

import { createContext, useContext } from 'react';

// Типы экрана
export type ScreenSize = {
  width: number;
  height: number;
  breakpoints: {
    maxMobile: boolean;
    maxMobileLate: boolean;
    maxTablet: boolean;
    tablet: boolean;
    tabletLate: boolean;
    desktop: boolean;
    desktopLarge: boolean;
  };
};

// Контекст экрана
export const ScreenSizeContext = createContext<ScreenSize | null>(null);

// Хук для доступа к данным экрана
export const useScreenSize = () => {
  const context = useContext(ScreenSizeContext);
  if (!context) {
    throw new Error('useScreenSize must be used within a <ScreenSizeProvider>');
  }
  return context;
};

// Функция для вычисления текущего размера
export const getScreenSize = (): ScreenSize => {
  const width = window?.innerWidth;
  const height = window?.innerHeight;

  const breakpoints = {
    tablet: 650,
    tabletLate: 768,
    desktop: 1200,
    desktopLarge: 1920,
  };

  return {
    width,
    height,
    breakpoints: {
      maxMobile: width < breakpoints.tablet,
      maxMobileLate: width < breakpoints.tabletLate,
      maxTablet: width < breakpoints.desktop,
      tablet: width >= breakpoints.tablet,
      tabletLate: width >= breakpoints.tabletLate,
      desktop: width >= breakpoints.desktop,
      desktopLarge: width >= breakpoints.desktopLarge,
    },
  };
};
