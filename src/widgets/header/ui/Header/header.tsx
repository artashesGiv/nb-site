'use client';

import { memo, useMemo } from 'react';

import Image from 'next/image';

import { Button, TransitionBase, useScreenSize } from '@/shared';

import './header.scss';

export type HeaderProps = DefaultProps;

export const Header = memo<HeaderProps>(props => {
  const classes = useHeaderClasses(props);

  const { breakpoints } = useScreenSize();

  return (
    <header className={classes}>
      <Image
        src='/images/header/logo.png'
        alt='logo'
        className='header__logo'
        width={187}
        height={65}
      />
      <TransitionBase isVisible>
        {breakpoints.desktop && (
          <div className='header__links'>
            <Button text='О компании' view='flat' />
            <Button text='Услуги' view='flat' />
            <Button text='Проекты' view='flat' />
            <Button text='Контакты' view='flat' />
          </div>
        )}
        {breakpoints.maxTablet && <div>qweqw</div>}
      </TransitionBase>
    </header>
  );
});

Header.displayName = 'Header';

const useHeaderClasses = ({ className }: HeaderProps) =>
  useMemo(() => {
    const classes = [className || '', 'header'];

    return classes.join(' ');
  }, [className]);
