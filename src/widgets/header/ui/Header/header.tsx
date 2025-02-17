'use client';

import { memo, useCallback, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Button,
  type ButtonProps,
  SectionContainer,
  type Sections,
  useOnClickOutside,
  useScreenSize,
} from '@/shared';
import { HeaderMenuModal } from '../HeaderMenuModal';
import './header.scss';

export type HeaderProps = DefaultProps;

const headerLinks: (ButtonProps & { to: Sections })[] = [
  { to: 'description', text: 'О компании' },
  { to: 'services', text: 'Услуги' },
  { to: 'projects', text: 'Проекты' },
  { to: 'contacts', text: 'Контакты' },
];

export const Header = memo<HeaderProps>(props => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const headerMenuRef = useRef<HTMLDivElement>(null);

  const classes = useHeaderClasses(props);
  const { breakpoints } = useScreenSize();
  const scrollToSection = useScrollToSection();
  useOnClickOutside(headerMenuRef, () => setMenuOpen(false));

  return (
    <header className={classes}>
      <SectionContainer>
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
              <Button
                key={to}
                text={text}
                view='flat'
                className='header__link'
                onClick={() => scrollToSection(to)}
              />
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
      </SectionContainer>
    </header>
  );
});

Header.displayName = 'Header';

const useHeaderClasses = ({ className }: HeaderProps) =>
  useMemo(() => {
    const classes = [className || '', 'header'];

    return classes.join(' ');
  }, [className]);

const useScrollToSection = () =>
  useCallback((id: Sections) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);
