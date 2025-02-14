import { memo, useMemo } from 'react';

import Image from 'next/image';

import { Button, type ButtonProps } from '@/shared';

import './header-mobile-menu.scss';

export type HeaderMobileMenuProps = DefaultProps<{
  links: (ButtonProps & { to: string })[];
}>;

export const HeaderMobileMenu = memo<HeaderMobileMenuProps>(props => {
  const { links, ref } = props;
  const classes = useHeaderMobileMenuClasses(props);

  return (
    <div className={classes} ref={ref}>
      <div className='header-mobile-menu__links'>
        {links.map(({ to, text }) => (
          <Button
            key={to}
            text={text}
            view='flat'
            className='header-mobile-menu__link'
          />
        ))}
      </div>

      <Image
        src='/images/decorators/header-mobile.png'
        alt='decor'
        width={315}
        height={140}
        className='header-mobile-menu__decor'
      />
    </div>
  );
});

HeaderMobileMenu.displayName = 'HeaderMobileMenu';

const useHeaderMobileMenuClasses = ({ className }: HeaderMobileMenuProps) =>
  useMemo(() => {
    const classes = [className || '', 'header-mobile-menu'];

    return classes.join(' ');
  }, [className]);
