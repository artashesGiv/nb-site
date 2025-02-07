import './card-base.scss';
import { memo, useMemo } from 'react';

export type CardBaseProps = DefaultPropsWithChildren<{
  view?: 'default' | 'fill';
  size?: 's' | 'm' | 'l';
}>;

export const CardBase = memo<CardBaseProps>(
  ({ children, view = 'default', className = '', size = 'm' }) => {
    const classes = UseCardBaseClasses({ className, size, view });

    return <div className={classes}>{children}</div>;
  },
);

CardBase.displayName = 'CardBase';

const UseCardBaseClasses = ({ className, size, view }: CardBaseProps) =>
  useMemo(() => {
    const classes = [
      className,
      'card-base',
      `card-base--size--${size}`,
      `card-base--view--${view}`,
    ];

    return classes.join(' ');
  }, [className, size, view]);
