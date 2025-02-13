import { memo, useMemo } from 'react';

import Image from 'next/image';

import { Button, type ButtonProps } from '@/shared';

import './header-mobile.scss';

export type HeaderMobileProps = DefaultProps<{
  links: (ButtonProps & { to: string })[];
}>;

export const HeaderMobile = memo<HeaderMobileProps>(props => {
  const { links } = props;
  const classes = useHeaderMobileClasses(props);

  return (
    <div className={classes}>
      {links.map(({ to, text }) => (
        <Button
          key={to}
          text={text}
          view='flat'
          className='header-mobile__link'
        />
      ))}
      <Image
        src='/images/decorators/header-mobile.png'
        alt='decor'
        width={386}
        height={566}
      />
    </div>
  );
});

HeaderMobile.displayName = 'HeaderMobile';

const useHeaderMobileClasses = ({ className }: HeaderMobileProps) =>
  useMemo(() => {
    const classes = [className || '', 'header-mobile'];

    return classes.join(' ');
  }, [className]);
