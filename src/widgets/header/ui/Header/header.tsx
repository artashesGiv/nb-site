'use client';

import { memo, useMemo, useState } from 'react';

import Image from 'next/image';

import {
  Button,
  type ButtonProps,
  TransitionBase,
  useScreenSize,
} from '@/shared';

import { HeaderMobile } from '../HeaderMobile';

import './header.scss';

export type HeaderProps = DefaultProps;

const headerLinks: (ButtonProps & { to: string })[] = [
  { to: 'about', text: 'О компании' },
  { to: 'services', text: 'Услуги' },
  { to: 'projects', text: 'Проекты' },
  { to: 'contacts', text: 'Контакты' },
];

export const Header = memo<HeaderProps>(props => {
  const classes = useHeaderClasses(props);

  const { breakpoints } = useScreenSize();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className={classes}>
      <Image
        src='/images/header/logo.png'
        alt='logo'
        className='header__logo'
        width={187}
        height={65}
      />
      {breakpoints.desktop && (
        <div className='header__links'>
          {headerLinks.map(({ to, text }) => (
            <Button key={to} text={text} view='flat' className='header__link' />
          ))}
        </div>
      )}
      {breakpoints.maxTablet && (
        <>
          <Button
            icon='burger'
            size={breakpoints.maxMobile ? 's' : 'xl'}
            view='flat'
            onClick={() => setMenuOpen(true)}
          />
          <TransitionBase isVisible={isMenuOpen}>
            <HeaderMobile links={headerLinks} />
          </TransitionBase>
        </>
      )}
    </header>
  );
});

Header.displayName = 'Header';

const useHeaderClasses = ({ className }: HeaderProps) =>
  useMemo(() => {
    const classes = [className || '', 'header'];

    return classes.join(' ');
  }, [className]);
