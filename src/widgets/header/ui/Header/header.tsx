'use client';

import { memo, useMemo, useRef, useState } from 'react';

import Image from 'next/image';

import {
  Button,
  type ButtonProps,
  useOnClickOutside,
  useScreenSize,
} from '@/shared';

import { HeaderMenuModal } from '../HeaderMenuModal';

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

  const headerMenuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(headerMenuRef, () => setMenuOpen(false));

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
          <HeaderMenuModal
            isOpen={isMenuOpen}
            links={headerLinks}
            ref={headerMenuRef}
          />
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
